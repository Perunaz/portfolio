import React from 'react';

const Badge = ({ color, children}) => {

    let textColor = undefined;
    const red = color.substring(1, 3)
    const green = color.substring(4, 5)
    const blue = color.substring(5, 6)

    if ((red*0.299 + green*0.587 + blue*0.114) > 186) {
        textColor = '#000000';
    } else {
        textColor = '#FFFFFF';
    }

    const divStyle = {
        backgroundColor: `${color}`,
        color: `${textColor}`,
    };

    return <div className='badge' style={divStyle}>{children}</div>;
};

export default Badge;