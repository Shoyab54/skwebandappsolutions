import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { FadeIn } from "@/components/FadeIn";
import { LiveProjectButton } from "@/components/LiveProjectButton";
import { ContactButton } from "@/components/ContactButton";

interface Project {
  num: string;
  name: string;
  category: string;
  url: string;
  images: [string, string, string];
}

const PROJECTS: Project[] = [
  {
    num: "01",
    name: "Deep Lakshmi",
    category: "Client — Construction",
    url: "https://deeplakshmi.com",
    images: ["/projects/deeplakshmi-2.png", "/projects/deeplakshmi-3.png", "/projects/deeplakshmi-1.png"],
  },
  {
    num: "02",
    name: "KK Enterprises",
    category: "Client — Industrial Supplies",
    url: "https://kksolution.co.in",
    images: ["/projects/kksolution-2.png", "/projects/kksolution-3.png", "/projects/kksolution-1.png"],
  },
  {
    num: "03",
    name: "S.K Interior",
    category: "Client — Interior Design",
    url: "https://skinterior.co.in",
    images: ["/projects/skinterior-2.png", "/projects/skinterior-3.png", "/projects/skinterior-1.png"],
  },
  {
    num: "04",
    name: "Eco Luxury",
    category: "Client — Invisible Grills",
    url: "https://ecoluxury.co.in",
    images: ["/projects/ecoluxury-2.png", "/projects/ecoluxury-3.png", "/projects/ecoluxury-1.png"],
  },
  {
    num: "05",
    name: "SK Engineering Works",
    category: "Client — Machinery",
    url: "https://skengineeringworks.org",
    images: ["/projects/skengineering-3.png", "/projects/skengineering-4.png", "/projects/skengineering-2.png"],
  },
];

const TOTAL = PROJECTS.length + 1;

interface CardProps {
  i: number;
  total: number;
  progress: MotionValue<number>;
}

const ProjectCard = ({ project, i, total, progress }: CardProps & { project: Project }) => {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  return (
    <div
      className="sticky flex h-[85vh] items-center justify-center"
      style={{ top: `calc(clamp(6rem, 12vw, 8rem) + ${i * 28}px)` }}
    >
      <motion.article
        style={{ scale }}
        data-testid={`project-card-${project.num}`}
        className="flex w-full max-w-6xl origin-top flex-col gap-5 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-[clamp(2.5rem,6vw,80px)] font-black leading-none text-[#D7E2EA]">
            {project.num}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
              {project.category}
            </span>
            <h3 className="text-[clamp(1.2rem,2.5vw,2rem)] font-medium uppercase leading-tight text-[#D7E2EA]">
              {project.name}
            </h3>
          </div>
          <div className="ml-auto">
            <LiveProjectButton href={project.url} />
          </div>
        </div>
        <div className="grid flex-1 grid-cols-[40%_60%] gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={project.images[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[24px] object-cover sm:rounded-[32px] md:rounded-[40px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[24px] object-cover sm:rounded-[32px] md:rounded-[40px]"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} preview 3`}
            loading="lazy"
            className="h-full w-full rounded-[24px] object-cover object-top sm:rounded-[32px] md:rounded-[40px]"
          />
        </div>
      </motion.article>
    </div>
  );
};

const CtaCard = ({ i, total, progress }: CardProps) => {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  return (
    <div
      className="sticky flex h-[85vh] items-center justify-center"
      style={{ top: `calc(clamp(6rem, 12vw, 8rem) + ${i * 28}px)` }}
    >
      <motion.article
        style={{
          scale,
          background: "linear-gradient(135deg, #1d1408 0%, #0C0C0C 55%)",
        }}
        data-testid="project-card-cta"
        className="flex w-full max-w-6xl origin-top flex-col items-center gap-8 rounded-[40px] border-2 border-[#D7E2EA] px-6 py-16 text-center sm:rounded-[50px] md:rounded-[60px] md:py-24"
      >
        <span className="text-[clamp(2.5rem,6vw,80px)] font-black leading-none text-[#D7E2EA] opacity-40">
          06
        </span>
        <h3 className="hero-heading text-[clamp(2.2rem,8vw,110px)] font-black uppercase leading-none tracking-tight">
          Your project next
        </h3>
        <p className="max-w-xl text-[clamp(0.9rem,1.6vw,1.2rem)] font-light leading-relaxed text-[#D7E2EA] opacity-70">
          These are just a few — we have delivered many more websites and apps with the same care.
          Tell us about your idea and let&apos;s make it real.
        </p>
        <ContactButton href="#contact" label="Start a Project" />
      </motion.article>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
      data-testid="projects-section"
    >
      <FadeIn
        as="h2"
        className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
      >
        Projects
      </FadeIn>
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.num} project={project} i={i} total={TOTAL} progress={scrollYProgress} />
      ))}
      <CtaCard i={TOTAL - 1} total={TOTAL} progress={scrollYProgress} />
    </section>
  );
};
