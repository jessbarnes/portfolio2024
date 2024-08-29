import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navigation = ({
  scrolledPastNav,
  scrollTo,
  sections,
}: {
  scrolledPastNav: boolean;
  scrollTo: (section: string) => void;
  sections: string[];
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const backgroundColor = () => {
    if (scrolledPastNav && !isOpen) {
      return "bg-gradient-to-b from-blue-400 via-blue-400/50 to-transparent";
    } else if (isOpen) {
      return "bg-blue-400";
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (bodyRef.current) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          bodyRef.current &&
          !bodyRef.current.contains(event.target as Node) &&
          isOpen
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [bodyRef, isOpen]);

  return (
    <>
      {(scrolledPastNav || isOpen) && <div className="h-[72px]" />}
      <div
        ref={bodyRef}
        className={`flex flex-row items-center justify-between w-full px-4 md:px-12
        font-bold uppercase lg:text-lg text-white 
         ${scrolledPastNav || isOpen ? "fixed top-0  pt-6 pb-12" : "py-6"}
         ${backgroundColor()}
        `}
      >
        <div
          className="tracking-wider hover:text-blue-900 cursor-pointer"
          onClick={() => {
            scrollTo("top");
            setIsOpen(false);
          }}
        >
          Jessica Barnes
        </div>
        <div className="hidden md:flex flex-row items-center gap-4 md:gap-12 lg:gap-24">
          {sections.map((s) => (
            <button
              key={`nav-${s}`}
              onClick={() => {
                scrollTo(s);
                setIsOpen(false);
              }}
              className="uppercase hover:text-blue-900"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="block md:hidden">
          <button
            className="clickable-white-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-blue-400 border-0 border-b-2 flex flex-col">
            {sections.map((s) => (
              <button
                key={`nav-${s}`}
                onClick={() => {
                  scrollTo(s);
                  setIsOpen(false);
                }}
                className="py-4 text-lg uppercase hover:text-blue-900 border-t-2"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
