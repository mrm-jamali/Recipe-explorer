function Header() {
  return (
   <div className="h-[600px] w-full bg-black bg-[url('/images/recipe-hero.jpg')] bg-contain bg-center bg-no-repeat px-[30px] py-16">
      <div className="flex flex-col items-start gap-6  px-[30px]">
        <h3 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-green-400">
          <span>Discover</span>
          <span>COOK</span>
          <span>Enjoy</span>
        </h3>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Find Your Next Favorite{" "}
          <span className="text-green-400">Recipe</span>
        </h1>

    <p className="max-w-lg text-sm leading-6 text-white/80">
  Explore thousands of delicious recipes from around the world, discover new
  flavors, learn how to prepare your favorite meals, and find fresh inspiration
  for every breakfast, lunch, and dinner.
</p>
      <div className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-white/20 bg-white px-2 py-1 focus-within:ring-2 focus-within:ring-green-400">
          <input
            type="text"
            placeholder="Search for a recipe..."
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
          />
          <button
            type="button"
            aria-label="Search recipes"
            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;