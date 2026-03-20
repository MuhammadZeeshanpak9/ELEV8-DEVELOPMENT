import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ParticleField, BlueprintGrid } from '@/components/backgrounds';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  delay?: number;
  isInView: boolean;
}

function FormInput({ label, name, type = 'text', placeholder, required, delay = 0, isInView }: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <label className="block text-gray-600 text-sm mb-2">{label}</label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/10 transition-all duration-300"
        />
        {/* Focus Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isFocused ? 1 : 0 }}
          className="absolute -inset-px bg-brand-500/10 rounded-xl blur-sm -z-10"
        />
        {/* Bottom Line Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent"
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  );
}

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Global Headquarters, Dubai, UAE' },
    { icon: Mail, label: 'Email', value: 'hello@elev8.dev' },
    { icon: Phone, label: 'Phone', value: '+971 4 123 4567' },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 lg:py-48 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/30 to-white" />
      <BlueprintGrid density={100} animated />
      <ParticleField particleCount={30} color="rgba(159, 129, 185, 0.2)" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-500 text-sm tracking-[0.2em] uppercase font-medium">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mt-4 mb-6">
                Say <span className="text-gradient">Hello</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Ready to start your next project? We'd love to hear from you. 
                Reach out and let's discuss how we can bring your vision to life.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12"
              >
                <p className="text-gray-500 text-sm mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-brand-500/10 hover:border-brand-500/30 hover:text-brand-500 transition-all duration-300 shadow-sm"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-lg">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <Send className="w-10 h-10 text-brand-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        required
                        delay={0.3}
                        isInView={isInView}
                      />
                      <FormInput
                        label="Company"
                        name="company"
                        placeholder="Your company"
                        delay={0.35}
                        isInView={isInView}
                      />
                    </div>
                    
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      delay={0.4}
                      isInView={isInView}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.45 }}
                      className="relative"
                    >
                      <label className="block text-gray-600 text-sm mb-2">Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        required
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/10 transition-all duration-300 resize-none"
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-500/25"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
