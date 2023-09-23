export default function SearchBar() {
  return (
    <div className="relative flex items-center">
      <input
        className="max-w-[100px] rounded-md bg-primary-200 py-1 pl-8 sm:max-w-none md:pr-12"
        placeholder="Search"
      />
      <img
        src="/icons/magnifier.svg"
        className="absolute left-2 top-1/4"
      />
    </div>
  );
}
