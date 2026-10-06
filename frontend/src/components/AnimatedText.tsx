import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

interface CharProps {
  progress: MotionValue<number>;
  range: [number, number];
  char: string;
}

const Char = ({ progress, range, char }: CharProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const words = text.split(" ");
  const total = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} data-testid="animated-text">
      {words.map((word, wi) => {
        const start = charIndex;
        charIndex += word.length + 1;
        return (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((ch, ci) => (
                <Char
                  key={ci}
                  progress={scrollYProgress}
                  range={[(start + ci) / total, (start + ci + 1) / total]}
                  char={ch}
                />
              ))}
            </span>
            {wi < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </p>
  );
};
