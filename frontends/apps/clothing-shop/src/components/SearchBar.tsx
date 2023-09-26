export default function SearchBar() {
  return (
    <div className="relative flex w-1/3 items-center">
      <input
        className="w-full rounded-md bg-primary-200 py-1 pl-8 md:pr-12"
        placeholder="Search"
      />
      <img src="/icons/magnifier.svg" className="absolute left-2 top-1/4" />
    </div>
  );
}
