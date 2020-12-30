import { useState } from 'react';

const useScroll = () => {
  const [isMoving, setIsMoving] = useState();

  const clickMove = ({top}) => {
    setIsMoving(window.scrollTo({
      top : {top},
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