import { useMemo } from 'react';

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const size = Math.random() * 4 + 2;
      const colorIdx = Math.floor(Math.random() * 3);
      const colors = [
        'var(--hero-particle-1)',
        'var(--hero-particle-2)',
        'var(--hero-particle-3)',
      ];
      return {
        id: i,
        size,
        left: `${Math.random() * 100}%`,
        color: colors[colorIdx],
        duration: `${Math.random() * 15 + 10}s`,
        delay: `${-Math.random() * 20}s`,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            background: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
