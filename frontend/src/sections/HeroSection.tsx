import { FadeIn } from "@/components/FadeIn";
import { Magnet } from "@/components/Magnet";
import { ContactButton } from "@/components/ContactButton";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HeroSection = () => (
  <section className="relative flex h-screen flex-col overflow-x-clip" data-testid="hero-section">
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="relative z-30 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
    >
      <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
        <img
          src="/brand/logo.jpg"
          alt="SK Web & App Solutions logo"
          className="logo-blend h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
        />
        <span className="hidden text-sm font-medium uppercase tracking-widest text-[#D7E2EA] lg:block">
          SK Web &amp; App Solutions
        </span>
      </a>
      <div className="flex items-center gap-4 sm:gap-7 md:gap-9">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            data-testid={`nav-link-${link.label.toLowerCase()}`}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </FadeIn>

    <div className="overflow-hidden">
      <FadeIn
        as="h1"
        delay={0.15}
        y={40}
        className="hero-heading mt-6 w-full whitespace-nowrap text-[12vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[12.5vw] md:-mt-5 md:text-[13.5vw] lg:text-[14vw]"
      >
        sk web &amp; app
      </FadeIn>
    </div>

    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0">
      <FadeIn delay={0.6} y={30}>
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="/brand/hero.jpg"
            alt="Premium golden abstract sculpture"
            data-testid="hero-portrait"
            className="deco-blend pointer-events-none w-[280px] select-none sm:w-[360px] md:w-[440px] lg:w-[520px]"
          />
        </Magnet>
      </FadeIn>
    </div>

    <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
      <FadeIn delay={0.35} y={20}>
        <p
          data-testid="hero-tagline"
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          a premium web &amp; app studio crafting striking and unforgettable digital products
        </p>
      </FadeIn>
      <FadeIn delay={0.5} y={20}>
        <ContactButton />
      </FadeIn>
    </div>
  </section>
);
