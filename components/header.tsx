
function Header() {
  return (
    <header className="min-h-[480px] w-full bg-black bg-[url('/images/recipe-hero.jpg')] bg-cover bg-center bg-no-repeat px-4 py-10 sm:px-8 sm:py-14 lg:min-h-[600px] lg:px-12 lg:py-16">
      <div className="flex w-full max-w-2xl flex-col items-start gap-5 sm:gap-6">
        <h3 className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-green-400 sm:gap-3 sm:text-sm sm:tracking-[0.2em]">
          <span>Discover</span>
          <span>COOK</span>
          <span>Enjoy</span>
        </h3>

        <h1 className="max-w-full text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Find Your Next Favorite{" "}
          <span className="text-green-400">Recipe</span>
        </h1>

        <p className="max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          Explore thousands of delicious recipes from around the world,
          discover new flavors, learn how to prepare your favorite meals,
          and find fresh inspiration for every breakfast, lunch, and dinner.
        </p>

        <div className="flex w-full max-w-xl items-center gap-2 rounded-xl border border-white/20 bg-white p-1.5 focus-within:ring-2 focus-within:ring-green-400 sm:gap-3 sm:p-2">
          <input
            type="text"
            placeholder="Search for a recipe..."
            aria-label="Search for a recipe"
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:px-3"
          />

          <button
            type="button"
            aria-label="Search recipes"
            className="shrink-0 rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-green-400 sm:px-5"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
