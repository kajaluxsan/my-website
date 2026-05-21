import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPostLoading() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <article className="container-narrow">
          <div className="h-4 w-24 animate-pulse rounded bg-white/10" />

          <header className="mb-10 mt-8">
            <div className="mb-3 flex gap-3">
              <div className="h-3 w-28 animate-pulse rounded bg-white/10" />
              <div className="h-3 w-20 animate-pulse rounded bg-white/10" />
            </div>
            <div className="h-10 w-full animate-pulse rounded bg-white/10 sm:h-14" />
            <div className="mt-3 h-10 w-3/4 animate-pulse rounded bg-white/10 sm:h-14" />
            <div className="mt-5 h-5 w-full animate-pulse rounded bg-white/10" />
            <div className="mt-2 h-5 w-5/6 animate-pulse rounded bg-white/10" />
            <div className="mt-6 flex gap-2">
              <div className="h-6 w-16 animate-pulse rounded-full bg-white/10" />
              <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
              <div className="h-6 w-14 animate-pulse rounded-full bg-white/10" />
            </div>
          </header>

          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-4 animate-pulse rounded bg-white/10"
                style={{ width: `${100 - (i % 4) * 8}%` }}
              />
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
