import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-blue px-6 py-40 text-center text-white">
      <p className="text-brown uppercase tracking-[0.25em]">404</p>
      <h1 className="mt-4 text-4xl md:text-6xl font-bold heading-aleo">Page not found</h1>
      <p className="mx-auto mt-5 max-w-xl text-white/80">
        The page may have moved. Visit the homepage, browse current menus or see what is on at The Cornerstone.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-md bg-brown px-6 py-3">Go to homepage</Link>
        <Link href="/menus" className="rounded-md border border-white px-6 py-3">View menus</Link>
        <Link href="/whatson" className="rounded-md border border-white px-6 py-3">What&apos;s on</Link>
      </div>
    </main>
  );
}
