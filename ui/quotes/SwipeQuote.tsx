import react from "react";
import { useMotionValue, motion } from "framer-motion";
import clsx from 'clsx';

const DRAG_BUFFER = 50;

interface SQprops {
  handleNext: () => void;
  handlePrevious: () => void;
  index: number;
  isSmallScreen: boolean;
  currentIndex: number;
  quotesLength: number;
  quote: string;
  variants: Record<string, any>;
}

export const SwipeableQuote: react.FC<SQprops> = ({
  handleNext,
  handlePrevious,
  index,
  isSmallScreen,
  currentIndex,
  quotesLength,
  quote,
  variants,
}) => {
  const dragX = useMotionValue(0);
  const onDragEnd = () => {
    let x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      handleNext();
    } else if (x >= DRAG_BUFFER) {
      handlePrevious();
    }
  };
  return (
    <motion.li
      key={index}
      initial={"initial"}
      drag={isSmallScreen ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={onDragEnd}
      animate={
        currentIndex === index
          ? "active"
          : (currentIndex > index &&
              currentIndex - index !== quotesLength - 1) ||
            index - currentIndex === quotesLength - 1
          ? "left"
          : "right"
      }
      variants={variants}
      className={clsx(
        "absolute w-fit top-12 m-auto text-center text-4xl",
        currentIndex === index ? "active" : ""
      )}
      style={{
        x: dragX,
      }}
    >
      <div className="relative flex flex-row justify-center items-center">
        <span className="absolute -top-3 -left-6 text-6xl text-pink-600">
          "
        </span>
        {quote}
        <span className="absolute -right-7 -bottom-10 text-6xl text-pink-600">
          "
        </span>
        <p className="absolute -bottom-6 -right-7 text-sm text-right">
          - Alicia Wimsatt
        </p>
      </div>
    </motion.li>
  );
};
