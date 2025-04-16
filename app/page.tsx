'use client';

import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { File, Pen, Tag, Diamond, User, Folder } from "lucide-react";
import { TronButton } from "@/components/ui/tron-button";
import { TronCard } from "@/components/ui/tron-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-cyan-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-transparent via-cyan-500/10 to-transparent" />
        
        {/* Neon Text */}
        <div className="absolute inset-0 flex items-top justify-center">
          <h1 className="text-[14vw] font-light tracking-widest neon-text opacity-50 leading-none whitespace-nowrap">PURE CATCH</h1>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            For Keepers, By Keepers
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium goalkeeper equipment and training guides to help you reach your full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/store">
              <TronButton size="lg" className="text-lg">
                Shop Now
              </TronButton>
            </Link>
            <Link href="/support">
              <TronButton variant="outline" size="lg" className="text-lg">
                Learn More
              </TronButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TronCard className="p-6">
              <div className="relative h-48 mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/pro-keeper-gloves.png"
                    alt="Professional Goalkeeper Gloves"
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Professional Series</h3>
              <p className="text-gray-400 mb-4">Premium gloves designed for professional performance</p>
              <TronButton asChild>
                <Link href="/store/collections/professional">View Collection</Link>
              </TronButton>
            </TronCard>
            <TronCard className="p-6">
              <div className="relative h-48 mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/youth-series-gloves.png"
                    alt="Youth Goalkeeper Gloves"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Youth Series</h3>
              <p className="text-gray-400 mb-4">Durable gloves perfect for daily training sessions</p>
              <TronButton asChild>
                <Link href="/store/collections/youth">View Collection</Link>
              </TronButton>
            </TronCard>
            <TronCard className="p-6">
              <div className="relative h-48 mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/player-accessories.png"
                    alt="Player Accessories"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Player Accessories</h3>
              <p className="text-gray-400 mb-4">All the gear you need to be the best keeper you can be</p>
              <TronButton asChild>
                <Link href="/store/collections/accessories">View Collection</Link>
              </TronButton>
            </TronCard>
          </div>
        </div>
      </section>

      {/* Training Guides */}
      <section className="py-16 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Training Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TronCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Diving Techniques</h3>
              <p className="text-gray-400 mb-4">
                Master the art of diving with our comprehensive guide covering proper form, timing, and recovery.
              </p>
              <TronButton asChild>
                <Link href="/guides/diving-technique">Read Guide</Link>
              </TronButton>
            </TronCard>
            <TronCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Positioning & Angles</h3>
              <p className="text-gray-400 mb-4">
                Learn how to position yourself effectively and understand shot angles to improve your save percentage.
              </p>
              <TronButton asChild>
                <Link href="/guides/goalkeeper-positioning">Read Guide</Link>
              </TronButton>
            </TronCard>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <TronCard className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Join the Pure Catch Community</h2>
              <p className="text-gray-400 mb-6">
                Get exclusive access to training tips, product updates, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-500"
                />
                <TronButton type="submit">Subscribe</TronButton>
              </form>
            </div>
          </TronCard>
        </div>
      </section>
    </main>
  );
} 