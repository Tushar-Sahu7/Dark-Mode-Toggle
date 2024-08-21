import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloaders = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const preloaderRef = useRef(null);

  useEffect(() => {
    const countTween = gsap.to({}, {
      duration: 2,
      onUpdate: () => {
        const progress = countTween.progress();
        const newCount = Math.round(progress * 100);
        setCount(newCount);
      },
      onComplete: () => {
        console.log("Counting complete");
      }
    });

    const tl = gsap.timeline({
      onComplete: () => {
        console.log("Animation complete");
        if (onComplete) onComplete();
      },
    });

    tl.add(countTween)
      .to(preloaderRef.current, { y: "-100%", duration: 0.5 });

    return () => {
      countTween.kill();
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} style={styles.preloader}>
      {count}
    </div>
  );
};

const styles = {
  preloader: {
    overflow: "hidden",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "black",
    color: "white",
    fontSize: "250px",
    fontFamily: "Anton",
    paddingRight: "10px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
};

export default Preloaders;
