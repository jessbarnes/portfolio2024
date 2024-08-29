import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navigation = ({
  scrollTo,
  sections,
}: {
  scrollTo: (section: string) => void;
  sections: string[];
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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
      <div
        ref={bodyRef}
        className={`flex flex-row items-center justify-between w-full px-4 md:px-12
        font-bold uppercase lg:text-lg text-white fixed top-0 z-40
         ${
           isOpen
             ? "pt-6 pb-12 bg-blue-300"
             : "py-6 bg-gradient-to-b from-blue-400 via-blue-400/50 to-transparent"
         }
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
            className="text-3xl md:text-5xl text-white hover:text-blue-900 cursor-pointer"
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
                className="py-4 text-lg uppercase hover:bg-blue-300 hover:text-blue-900 border-t-2"
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
