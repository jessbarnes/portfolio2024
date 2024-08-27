const Navigation = ({
  scrolledPastNav,
  scrollTo,
  sections,
}: {
  scrolledPastNav: boolean;
  scrollTo: (section: string) => void;
  sections: string[];
}) => (
  <div
    className={`flex flex-row items-center justify-between w-full px-4 md:px-12 lg:justify-evenly ${
      scrolledPastNav
        ? "fixed top-0 bg-gradient-to-b from-white via-white/50 to-transparent pt-6 pb-12"
        : "py-6"
    }`}
  >
    {sections.map((s) => (
      <button
        key={`nav-${s}`}
        onClick={() => scrollTo(s)}
        className={`font-bold uppercase lg:text-lg ${
          scrolledPastNav
            ? "text-blue-800 hover:text-black"
            : "text-white hover:text-blue-900"
        }`}
      >
        {s}
      </button>
    ))}
  </div>
);

export default Navigation;
