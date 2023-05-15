import React from 'react';

const Gradient = ({ colors }) => {
  const gradientColors = colors.join(', ');

  const divStyle = {
    background: `linear-gradient(to right, ${gradientColors})`,
  };

  return <div className='gradient' style={divStyle}></div>;
};

export default Gradient;