import { useEffect, useRef, useState } from 'react';

interface Props {
  target: number;
  label: string;
  decimal?: boolean;
}

export default function CountUp({ target, label, decimal }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let current = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setValue(current);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const display = decimal
    ? value.toFixed(1)
    : `${Math.floor(value)}${target >= 4 ? '+' : ''}`;

  return (
    <div ref={ref} className="text-left">
      <div className="font-display text-3xl lg:text-4xl font-black text-gold leading-none">
        {display}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}
