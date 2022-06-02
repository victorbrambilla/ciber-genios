import * as React from 'react';

const CustomDots = ({ onClick, active, index, carouselState }: any) => {
  const { currentSlide } = carouselState;
  return (
    <li>
      <button
        style={{
          backgroundColor: active ? '#1d2527' : '#D2D4D9',
          width: '90px',
          border: 'none',
          height: '4px',
        }}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default CustomDots;
