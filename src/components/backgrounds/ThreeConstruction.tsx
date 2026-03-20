import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Grid, Float } from '@react-three/drei';
import * as THREE from 'three';

const BUILDINGS_COUNT = 6;
const BRAND_PURPLE = '#9F81B9';

type BuildingShape = 'box' | 'cylinder' | 'curved' | 'stepped' | 'slanted';

function Building({ position, delay, args, shape }: {
    position: [number, number, number],
    delay: number,
    args: [number, number, number],
    shape: BuildingShape
}) {
    const groupRef = useRef<THREE.Group>(null);
    const [phase, setPhase] = useState(0);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const loopDuration = 30;
        const localTime = (time + delay) % loopDuration;

        if (localTime < 4) {
            setPhase(0);
            if (groupRef.current) groupRef.current.scale.y = 0;
        } else if (localTime < 12) {
            setPhase(1);
            if (groupRef.current) {
                const t = (localTime - 4) / 8;
                groupRef.current.scale.y = t;
                groupRef.current.position.y = (args[1] * t) / 2;
            }
        } else if (localTime < 24) {
            setPhase(3);
            if (groupRef.current) {
                groupRef.current.scale.y = 1;
                groupRef.current.position.y = args[1] / 2;
            }
        } else {
            setPhase(0);
            if (groupRef.current) {
                const t = 1 - (localTime - 24) / 6;
                groupRef.current.scale.y = t;
                groupRef.current.position.y = (args[1] * t) / 2;
            }
        }
    });

    const Geometry = useMemo(() => {
        switch (shape) {
            case 'cylinder': return <cylinderGeometry args={[args[0] / 2, args[0] / 2, args[1], 16]} />;
            case 'curved': return <cylinderGeometry args={[args[0] / 2, args[0] / 1.5, args[1], 32]} />;
            case 'slanted': return <cylinderGeometry args={[args[0] / 4, args[0] / 1, args[1], 4]} />;
            case 'stepped': return <boxGeometry args={args} />; // Fallback, handled below
            default: return <boxGeometry args={args} />;
        }
    }, [shape, args]);

    const materialProps = {
        color: phase === 1 ? BRAND_PURPLE : "#ffffff",
        transparent: true,
        opacity: phase === 1 ? 0.15 : 0.35,
        wireframe: phase === 1,
        metalness: phase === 1 ? 0 : 0.5,
        roughness: phase === 1 ? 1 : 0.8,
        emissive: BRAND_PURPLE,
        emissiveIntensity: 0.02,
    };

    return (
        <group ref={groupRef} position={position}>
            {shape === 'stepped' ? (
                // Stepped Terrace logic
                [1, 0.7, 0.4].map((s, i) => (
                    <mesh key={i} position={[0, (args[1] * (i - 1)) / 3, 0]} castShadow receiveShadow>
                        <boxGeometry args={[args[0] * s, args[1] / 3, args[2] * s]} />
                        <meshStandardMaterial {...materialProps} wireframe={phase === 1} />
                        <lineSegments>
                            <edgesGeometry args={[new THREE.BoxGeometry(args[0] * s, args[1] / 3, args[2] * s)]} />
                            <lineBasicMaterial color={BRAND_PURPLE} transparent opacity={0.1} />
                        </lineSegments>
                    </mesh>
                ))
            ) : (
                <mesh castShadow receiveShadow rotation={shape === 'slanted' ? [0, Math.PI / 4, 0] : [0, 0, 0]}>
                    {Geometry}
                    <meshStandardMaterial {...materialProps} wireframe={phase === 1} />
                    <lineSegments>
                        <edgesGeometry args={[
                            shape === 'cylinder' || shape === 'curved'
                                ? new THREE.CylinderGeometry(args[0] / 2, shape === 'curved' ? args[0] / 1.5 : args[0] / 2, args[1], 16)
                                : shape === 'slanted'
                                    ? new THREE.CylinderGeometry(args[0] / 4, args[0] / 1, args[1], 4)
                                    : new THREE.BoxGeometry(...args)
                        ]} />
                        <lineBasicMaterial color={BRAND_PURPLE} transparent opacity={0.1} />
                    </lineSegments>
                </mesh>
            )}
        </group>
    );
}

function ConstructionScene() {
    const buildings = useMemo(() => {
        const shapes: BuildingShape[] = ['box', 'cylinder', 'curved', 'stepped', 'slanted'];
        return Array.from({ length: BUILDINGS_COUNT }).map((_, i) => {
            const shape = shapes[i % shapes.length];
            const isCommercial = ['cylinder', 'curved', 'box'].includes(shape);
            return {
                shape,
                position: [
                    (Math.random() - 0.5) * 18,
                    0,
                    (Math.random() - 0.5) * 10 - 5,
                ] as [number, number, number],
                delay: i * 5, // Staggered start
                args: [
                    isCommercial ? 2 + Math.random() * 1 : 4 + Math.random() * 2,
                    isCommercial ? 10 + Math.random() * 8 : 5 + Math.random() * 5,
                    isCommercial ? 2 + Math.random() * 1 : 4 + Math.random() * 2,
                ] as [number, number, number],
            };
        });
    }, []);

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 20, 10]} intensity={0.5} color={BRAND_PURPLE} />

            <Grid
                infiniteGrid
                fadeDistance={50}
                fadeStrength={3}
                sectionSize={5}
                sectionColor={BRAND_PURPLE}
                sectionThickness={0.5}
                cellSize={1}
                cellColor={BRAND_PURPLE}
                cellThickness={0.2}
                position={[0, -0.01, 0]}
            />

            <Float speed={0.4} rotationIntensity={0.01} floatIntensity={0.05}>
                <group>
                    {buildings.map((b, i) => (
                        <Building key={i} {...b} />
                    ))}
                </group>
            </Float>

            <PerspectiveCamera makeDefault position={[0, 10, 30]} fov={35} />
        </>
    );
}

export function ThreeConstruction() {
    return (
        <div className="absolute inset-0 z-0 bg-white overflow-hidden">
            <Canvas shadows dpr={[1, 2]}>
                <color attach="background" args={['#ffffff']} />
                <fog attach="fog" args={['#ffffff', 20, 60]} />
                <ConstructionScene />
            </Canvas>
            {/* Soft gradient to blend with the rest of the page */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/60 pointer-events-none" />
        </div>
    );
}
