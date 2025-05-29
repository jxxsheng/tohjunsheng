import { useEffect, useRef, useState } from "react";

export const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteor, setMeteor] = useState(null);
  const meteorTimeoutRef = useRef(null);

  useEffect(() => {
    generateStars();
    generateMeteor(); // Start meteor loop

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(meteorTimeoutRef.current);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const stars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));

    setStars(stars);
  };

  const generateMeteor = () => {
    const meteor = {
      id: Date.now(),
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: "0s",
      animationDuration: `${Math.random() * 3 + 3}s`,
    };

    setMeteor(meteor);

    const nextDelay = Math.random() * 5000 + 3000; // 3s to 8s
    meteorTimeoutRef.current = setTimeout(generateMeteor, nextDelay);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteor && (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration,
          }}
        />
      )}
    </div>
  );
};
