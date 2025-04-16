import { TronButton } from '~/components/ui/tron-button';

export function Newsletter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest fishing tips, new products, and exclusive offers.
          </p>
          <form className="mt-8 flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            <TronButton type="submit">Subscribe</TronButton>
          </form>
        </div>
      </div>
    </section>
  );
} 