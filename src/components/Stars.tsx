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
  let randomY = 0;
  if (position === "top") {
    randomY = Math.random() * (viewportWidth > 768 ? 800 : 400) + 50;
  } else {
    randomY = -(Math.random() * (viewportWidth > 768 ? 800 : 400) + 50);
  }

  const rotation = Math.random() * 360;

  let opacity = 50;
  if (position === "top") {
    if (randomY > 600) {
      opacity = 10;
    } else if (randomY > 200) {
      opacity = 20;
    }
  } else {
    if (randomY < -200) {
      opacity = 10;
    } else if (randomY < -600) {
      opacity = 20;
    }
  }

  return (
    <div
      style={{
        left: randomX,
        top: randomY,
        transform: `rotate(${rotation}deg)`,
        pointerEvents: "none", // Prevent interaction with the floating text
      }}
      className={`absolute text-lg ${
        position === "top" ? "text-white" : "text-blue-400"
      } opacity-${opacity}`}
    >
      {symbol()}
    </div>
  );
};

const Stars = ({ position }: { position: "top" | "bottom" }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const amount = viewportWidth > 768 && position === "top" ? 500 : 100;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewportWidth(window.innerWidth);
    });
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
