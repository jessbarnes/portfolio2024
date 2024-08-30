import { useEffect, useState } from "react";

const Star = ({
  viewportWidth,
  position,
}: {
  viewportWidth: number;
  position: "top" | "bottom";
}) => {
  const symbol = () => {
    const symbols = ["·", "⋆", "˙", "⟡", "✮", "⊹", "⭒", "✴︎", "☆", "⭑"];
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomX = Math.random() * viewportWidth;
  let randomY = Math.random() * (viewportWidth > 768 ? 800 : 400) + 50;
  if (position !== "top") {
    randomY = -randomY;
  }

  const rotation = Math.random() * 360;

  let opacity = 0.7;
  if (position === "top") {
    if (randomY > 600) {
      opacity = 0.1;
    } else if (randomY > 200) {
      opacity = 0.3;
    }
  } else {
    if (randomY < -200) {
      opacity = 0.1;
    } else if (randomY < -600) {
      opacity = 0.3;
    }
  }

  return (
    <div
      style={{
        left: randomX,
        top: randomY,
        transform: `rotate(${rotation}deg)`,
        pointerEvents: "none", // Prevent interaction with the floating text
        opacity,
      }}
      className={`absolute text-lg ${
        position === "top" ? "text-white" : "text-blue-400"
      }`}
    >
      {symbol()}
    </div>
  );
};

const Stars = ({ position }: { position: "top" | "bottom" }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const amount = viewportWidth > 768 && position === "top" ? 500 : 100;

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setViewportWidth(window.innerWidth);
      }, 50);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      className={`relative left-0 w-full h-full ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
    >
      {[...Array(amount)].map((_, index) => (
        <Star
          key={`star-${index}`}
          viewportWidth={viewportWidth}
          position={position}
        />
      ))}
    </div>
  );
};

export default Stars;
