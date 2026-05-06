export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Product Data API
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Buy-It-For-Life Product Database API
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Structured durability ratings, longevity data, and buy-it-for-life recommendations via a simple REST API. Power your e-commerce site, sustainability app, or consumer research platform.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <span className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-lg">Durability Scores</span>
          <span className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-lg">Longevity Ratings</span>
          <span className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-lg">BIFL Recommendations</span>
          <span className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-lg">API Key Auth</span>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get API Access — $39/mo
        </a>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-center mb-6">
            <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro</span>
            <div className="mt-2">
              <span className="text-4xl font-bold text-white">$39</span>
              <span className="text-[#8b949e] ml-1">/month</span>
            </div>
            <p className="text-[#8b949e] text-sm mt-2">Full API access, no usage caps</p>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "50,000+ products indexed",
              "Durability & longevity scores",
              "Category & brand filtering",
              "BIFL community ratings",
              "JSON REST API",
              "API key authentication",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What data does the API return?</h3>
            <p className="text-[#8b949e] text-sm">Each product includes a durability score (1–10), estimated lifespan in years, category, brand, community BIFL rating, and structured review summaries — all in JSON.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How do I authenticate?</h3>
            <p className="text-[#8b949e] text-sm">After subscribing you receive an API key. Pass it as a Bearer token in the Authorization header with every request.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing portal — no contracts, no cancellation fees. Your access continues until the end of the billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Durable Product Database API. All rights reserved.
      </footer>
    </main>
  );
}
