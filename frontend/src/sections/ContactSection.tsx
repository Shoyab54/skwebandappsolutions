import { FadeIn } from "@/components/FadeIn";
import { ContactButton } from "@/components/ContactButton";
import { Phone, Mail, MessageCircle } from "lucide-react";

const pillClass =
  "flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-8 sm:text-sm md:text-base";

export const ContactSection = () => (
  <section
    id="contact"
    className="relative flex min-h-[80vh] flex-col items-center justify-center gap-12 px-5 py-24 text-center sm:gap-14 sm:px-8 md:px-10"
    data-testid="contact-section"
  >
    <FadeIn
      as="h2"
      className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
    >
      Let&apos;s talk
    </FadeIn>
    <FadeIn delay={0.1} y={20}>
      <p className="max-w-[520px] text-[clamp(0.95rem,1.8vw,1.25rem)] font-light leading-relaxed text-[#D7E2EA] opacity-80">
        Have an idea for a website or an app? Tell us about it — we usually reply within a day.
      </p>
    </FadeIn>
    <FadeIn delay={0.2} y={20} className="flex flex-wrap items-center justify-center gap-4">
      <a href="tel:+917900002740" data-testid="contact-phone" className={pillClass}>
        <Phone size={18} /> +91 79000 02740
      </a>
      <a href="mailto:skwebandappsolutions@gmail.com" data-testid="contact-email" className={pillClass}>
        <Mail size={18} /> skwebandappsolutions@gmail.com
      </a>
      <a
        href="https://wa.me/917900002740"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="contact-whatsapp"
        className={pillClass}
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </FadeIn>
    <FadeIn delay={0.3} y={20}>
      <ContactButton href="mailto:skwebandappsolutions@gmail.com" />
    </FadeIn>
    <footer className="mt-14 flex flex-col items-center gap-4">
      <img
        src="/brand/logo.jpg"
        alt="SK Web & App Solutions logo"
        className="logo-blend h-14 w-14 rounded-full object-cover"
      />
      <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50">
        © 2026 SK Web &amp; App Solutions. All rights reserved.
      </p>
    </footer>
  </section>
);
