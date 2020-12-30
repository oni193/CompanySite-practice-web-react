import { useState } from 'react';

const useScroll = () => {
  const [isMoving, setIsMoving] = useState();

  const clickMove = () => {
    setIsMoving(window.scrollTo({
      top : 0,
      left: 0,
      behavior : 'smooth',
    }));
  };
  return {
    isMoving,
    clickMove
  }
};

export default useScroll;