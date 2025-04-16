import { Link } from '@remix-run/react';
import { TronButton } from '~/components/ui/tron-button';

export function SupportAndDistribution() {
  return (
    <section className="py-24 bg-[#001324]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Customer Support */}
          <div className="bg-black/30 backdrop-blur-sm border border-[#00c3ff]/20 rounded-lg p-8">
            <h2 className="text-3xl font-light mb-6 text-white">Customer Support</h2>
            <p className="text-gray-300 mb-8">
              We're here to help with any questions you might have about our products or services.
              If you can't find what you're looking for, please don't hesitate to contact us.
            </p>
            <TronButton asChild variant="outline" className="w-full border-[#00c3ff] text-[#00c3ff] hover:bg-[#00c3ff]/10">
              <Link to="/support">Get Support</Link>
            </TronButton>
          </div>

          {/* Distribution & Wholesale */}
          <div className="bg-black/30 backdrop-blur-sm border border-[#00c3ff]/20 rounded-lg p-8">
            <h2 className="text-3xl font-light mb-6 text-white">Distribution & Wholesale</h2>
            <p className="text-gray-300 mb-8">
              Join our global network of successful retail and distribution partners riding the wave that is OG.
              Join the revolution and let's change the game together.
            </p>
            <TronButton asChild variant="outline" className="w-full border-[#00c3ff] text-[#00c3ff] hover:bg-[#00c3ff]/10">
              <Link to="/become-dealer">Become a Dealer</Link>
            </TronButton>
          </div>

          {/* Catch & Earn */}
          <div className="bg-black/30 backdrop-blur-sm border border-[#00c3ff]/20 rounded-lg p-8">
            <h2 className="text-3xl font-light mb-6 text-white">Catch & Earn</h2>
            <p className="text-gray-300 mb-8">
              Sign up and earn points on every single purchase that you can redeem for free gloves
              and money-cant-buy merch + get rewarded for bringing your friends!
            </p>
            <TronButton asChild variant="outline" className="w-full border-[#00c3ff] text-[#00c3ff] hover:bg-[#00c3ff]/10">
              <Link to="/earn">Earn Now</Link>
            </TronButton>
          </div>
        </div>
      </div>
    </section>
  );
} 