import { Mail, Phone, Linkedin, Globe, FileDown, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const contactItems = [
  { icon: <Mail size={18} />, iconClass: 'bg-primary/15 text-gold', label: 'Email', value: 'agyagp14@gmail.com', href: 'mailto:agyagp14@gmail.com' },
  { icon: <Phone size={18} />, iconClass: 'bg-secondary/15 text-accent-purple', label: 'Phone', value: '+91 7253003242', href: 'tel:+917253003242' },
  { icon: <Linkedin size={18} />, iconClass: 'bg-accent/15 text-teal', label: 'LinkedIn', value: 'agya-gupta-8b20521bb', href: 'https://www.linkedin.com/in/agya-gupta-8b20521bb/' },
  { icon: <FileDown size={18} />, iconClass: 'bg-secondary/15 text-accent-purple', label: 'Resume', value: 'Download CV (.docx)', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.send(
      'service_t64sfmh',
      'template_78s7r8u',
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      '-6RzVfpr-fa26xX_P'
    )
    .then(() => {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', subject: '', message: '' }); // ✅ reset
    })
    .catch(() => {
      alert('Failed to send message');
    });
  };

  return (
    <section id="contact" className="py-24 px-5 md:px-10 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">

        <AnimatedSection className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Let's Build Something<br />
            <span className="text-gradient-gold">Remarkable Together</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <AnimatedSection direction="left" className="space-y-4">
            {contactItems.map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-4 p-5 bg-card border rounded-2xl">
                <div className={`w-11 h-11 flex items-center justify-center ${c.iconClass}`}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs">{c.label}</div>
                  <div className="text-sm">{c.value}</div>
                </div>
              </a>
            ))}
          </AnimatedSection>

          {/* RIGHT SIDE */}
          <AnimatedSection direction="right">
            <form onSubmit={sendEmail} className="bg-card border rounded-2xl p-9">

              <h3 className="font-display text-xl mb-6">Send a Message</h3>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full mb-3 px-4 py-3 rounded-xl  bg-muted/30 text-foreground  border border-gold-subtle  placeholder:text-muted-foreground  outline-none  focus:border-gold focus:bg-primary/5  transition-all"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
                className="w-full mb-3 px-4 py-3 rounded-xl  bg-muted/30 text-foreground  border border-gold-subtle  placeholder:text-muted-foreground  outline-none  focus:border-gold focus:bg-primary/5  transition-all"
              />

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full mb-3 px-4 py-3 rounded-xl  bg-muted/30 text-foreground  border border-gold-subtle  placeholder:text-muted-foreground  outline-none  focus:border-gold focus:bg-primary/5  transition-all"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full mb-3 px-4 py-3 rounded-xl  bg-muted/30 text-foreground  border border-gold-subtle  placeholder:text-muted-foreground  outline-none  focus:border-gold focus:bg-primary/5  transition-all"
              />

              <button type="submit" className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-full font-bold no-underline flex items-center gap-2 text-sm hover:-translate-y-1 transition-transform shadow-gold">
                <Send size={16} /> Send Message
              </button>

            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}