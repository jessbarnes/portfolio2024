import { useEffect } from "react";
import skills from "../skills/skills";
import tools from "../skills/tools";

const Header = () => {
  useEffect(() => {
    function isElementInViewport(el: Element): boolean {
      const rect = el.getBoundingClientRect();
      return rect.right > 0;
    }

    const flavoursContainer = document.getElementById("flavoursContainer");
    if (!flavoursContainer) return;

    const flavoursScrollWidth = flavoursContainer.scrollWidth;

    window.addEventListener("load", () => {
      window.setInterval(() => {
        const first = document.querySelector("#flavoursContainer p");

        if (!first) return;

        if (!isElementInViewport(first)) {
          flavoursContainer.appendChild(first);
          flavoursContainer.scrollTo(
            flavoursContainer.scrollLeft - (first as HTMLElement).offsetWidth,
            0
          );
        }
        if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
          flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        }
      }, 25);
    });
  }, [window]);

  return (
    <>
      <style>
        {`
          .container {
            width: 100vw;
            overflow-x: scroll;
            white-space: nowrap;
            color: #fff;
            display: flex;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .scroll-disabler {
            width: 100vw;
            height: 34.4px;
            position: absolute;
            background-color: rgba(0,0,0 , 0.0001);
          }

          ::-webkit-scrollbar {
            display: none;
          }

          p {
            padding: 8px;
          }
        `}
      </style>
      <div className="relative flex flex-col items-center justify-center my-24 lg:my-48 gap-4 md:gap-12 lg:gap-24">
        <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-wider">
          Jessica Barnes
        </h1>
        <h2 className="text-2xl lg:text-4xl text-white">Software Engineer</h2>
        <div
          className="container absolute -bottom-48 opacity-50 text-lg"
          id="flavoursContainer"
        >
          <div className="scroll-disabler"></div>
          {[...skills, ...tools].map((i: string) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
