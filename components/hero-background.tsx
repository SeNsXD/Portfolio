export function HeroBackground({ accent }: { accent?: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-grid-pan absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)',
        }}
      />
      <div
        className="animate-glow-drift absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-2xl"
        style={{
          background: accent
            ? `radial-gradient(closest-side, color-mix(in oklch, ${accent} 28%, transparent), transparent)`
            : 'radial-gradient(closest-side, oklch(0.70 0.19 255 / 0.24) 0%, oklch(0.67 0.20 295 / 0.16) 48%, transparent 74%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
