import { FadeIn } from "@/components/FadeIn";

const SERVICES = [
  {
    num: "01",
    name: "Web Development",
    desc: "Custom, high-performance websites and web applications tailored to your business — fast, secure, responsive, and built to convert visitors into customers.",
  },
  {
    num: "02",
    name: "App Development",
    desc: "Beautiful cross-platform mobile apps with smooth, native-feel experiences — from idea and interface design all the way to launch.",
  },
  {
    num: "03",
    name: "UI/UX Design",
    desc: "Clean, modern, and conversion-focused interfaces with careful attention to layout, typography, and an effortless user experience.",
  },
  {
    num: "04",
    name: "E-commerce Solutions",
    desc: "Complete online stores with secure payments, product management, and shopping experiences designed to grow your sales.",
  },
  {
    num: "05",
    name: "Branding & SEO",
    desc: "Cohesive visual identities and search optimization that give your business a clear, memorable presence customers can actually find.",
  },
];

export const ServicesSection = () => (
  <section
    id="services"
    className="relative z-10 rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    data-testid="services-section"
  >
    <FadeIn
      as="h2"
      className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
    >
      Services
    </FadeIn>
    <div className="mx-auto max-w-5xl">
      {SERVICES.map((service, i) => (
        <FadeIn
          key={service.num}
          delay={i * 0.1}
          className={`flex flex-col gap-4 border-t py-8 sm:flex-row sm:items-center sm:gap-10 sm:py-10 md:gap-16 md:py-12 ${
            i === SERVICES.length - 1 ? "border-b" : ""
          }`}
          style={{ borderColor: "rgba(12, 12, 12, 0.15)" }}
        >
          <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]">
            {service.num}
          </span>
          <div className="flex flex-col gap-2 md:gap-3">
            <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-[#0C0C0C]">
              {service.name}
            </h3>
            <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C] opacity-60">
              {service.desc}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);
