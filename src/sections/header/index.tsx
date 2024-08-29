import skills from "../skills/skills";
import tools from "../skills/tools";

const Header = () => {
  return (
    <div className="relative flex flex-col items-center justify-center my-24 lg:my-48 gap-4 md:gap-12 lg:gap-24">
      <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-wider">
        Jessica Barnes
      </h1>
      <h2 className="text-2xl lg:text-4xl text-white">Software Engineer</h2>
      {[...skills, ...tools].map((item: string) => {
        // const randomX = Math.random() * 300 - 100; // Range: -100 to 200
        // const randomY = Math.random() * 300 - 100; // Range: -100 to 200

        const isWithinParent = (x: number, y: number): boolean => {
          const parentWidth = window.innerWidth;
          const parentHeight = window.innerHeight;
          const buffer = 50; // Adjust this value to control how close to the edge items can be

          return (
            x >= buffer &&
            x <= parentWidth - buffer &&
            y >= buffer &&
            y <= parentHeight - buffer
          );
        };

        let validPosition = false;
        let randomX, randomY;

        while (!validPosition) {
          randomX = Math.random() * 300 - 100; // Range: -100 to 200
          randomY = Math.random() * 300 - 100; // Range: -100 to 200
          validPosition = isWithinParent(randomX + 100, randomY + 100);
        }

        return (
          <p
            key={item}
            style={{
              position: "absolute",
              left: `calc(${randomX}%)`,
              top: `calc(${randomY}%)`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none", // Prevent interaction with the floating text
            }}
            className="text-lg opacity-50 text-white"
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default Header;
