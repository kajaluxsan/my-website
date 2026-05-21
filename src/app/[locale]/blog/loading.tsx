import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogLoading() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container-wide">
          <div className="h-3 w-16 animate-pulse rounded bg-white/10" />
          <div className="mt-3 h-10 w-3/4 animate-pulse rounded bg-white/10 sm:h-14" />
          <div className="mt-4 h-5 w-2/3 animate-pulse rounded bg-white/10" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="surface flex flex-col gap-3 p-6">
                <div className="h-3 w-32 animate-pulse rounded bg-white/10" />
                <div className="h-6 w-5/6 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
                <div className="mt-2 flex gap-2">
                  <div className="h-5 w-14 animate-pulse rounded-full bg-white/10" />
                  <div className="h-5 w-16 animate-pulse rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
