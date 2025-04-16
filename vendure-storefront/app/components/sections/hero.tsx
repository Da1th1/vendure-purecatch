import { TronButton } from '~/components/ui/tron-button';

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/cyber-grid.png')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            PureCatch
          </span>
          <br />
          <span className="text-white">Premium Fishing Gear</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-300">
          Experience the future of fishing with our cutting-edge equipment. Engineered for performance,
          designed for the modern angler.
        </p>
        <div className="flex gap-4">
          <TronButton size="lg">Shop Now</TronButton>
          <TronButton variant="outline" size="lg">
            Learn More
          </TronButton>
        </div>
      </div>
    </section>
  );
} 