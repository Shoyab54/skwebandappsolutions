import { FadeIn } from "@/components/FadeIn";
import { AnimatedText } from "@/components/AnimatedText";
import { ContactButton } from "@/components/ContactButton";

export const AboutSection = () => (
  <section
    id="about"
    className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    data-testid="about-section"
  >
    <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%]">
      <img src="/brand/moon.jpg" alt="" className="deco-blend w-[120px] sm:w-[160px] md:w-[210px]" />
    </FadeIn>
    <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
      <img src="/brand/cubes.jpg" alt="" className="deco-blend w-[100px] sm:w-[140px] md:w-[180px]" />
    </FadeIn>
    <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%]">
      <img src="/brand/knot.jpg" alt="" className="deco-blend w-[120px] sm:w-[160px] md:w-[210px]" />
    </FadeIn>
    <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
      <img src="/brand/orbit.jpg" alt="" className="deco-blend w-[130px] sm:w-[170px] md:w-[220px]" />
    </FadeIn>

    <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          About us
        </FadeIn>
        <AnimatedText
          className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          text="With more than five years of experience crafting digital products, we focus on web development, app development, and brand design. we truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
        />
      </div>
      <FadeIn delay={0.2} y={20}>
        <ContactButton />
      </FadeIn>
    </div>
  </section>
);
