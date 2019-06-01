import React from "react";

const KnightSVG = ({
    style = {},
    color = '#fff',
    colorHover = 'red',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 32 100',
  }) => 
  <svg
  width={width}
  style={style}
  height={height}
  viewBox={viewBox}
  xmlns="http://www.w3.org/2000/svg"
  className={`svg-icon ${className || ""}`}
  xmlnsXlink="http://www.w3.org/1999/xlink"
  transform="scale(-1,1)"
>
<g>
 <g>
     <path fill={color} d="M7.6,89v6.8h50.4V89c0-4.3-3.5-7.7-7.7-7.7h-35C11.1,81.3,7.6,84.8,7.6,89z"/>
     <rect fill={color} x="4.6" y="98.3" width="56.6" height="6"/>
     <rect fill={color} x="15.7" y="73.7" width="34.3" height="5"/>
     <path fill={color} d="M12.1,38.7c0.2-4.4,2.3-4.9,3.7-4.6c1.3,0.2,6.3,5,15.4-1.8c0,0,0.8,7-6.6,17.2c-7,9.7-12.1,9.4-12.1,21.1h42.2
         c3.3-13,8.4-45.9-19.2-61.9c0,0-10-12.5-11.5-7.7c-0.5,1.6,4.5,5.9,2.1,9.4c0,0-15.4,8.4-15.9,10.4c-0.3,1.2-0.1,2.2-0.1,2.5
         c0,0.2-1.7,3.6-4.2,6.8C3.7,33.1,0,33.7,0,37c0,2.2,4.6,6.8,6.2,6.7C8.5,43.7,11.9,41.6,12.1,38.7z"/>
 </g>
 <g>
     <path fill={color} d="M28.7,8.5l1.1-2.7c0,0-14.1,0.7-20.1,4.1c0,0,2.6,0.9,6.2,3.5L28.7,8.5z"/>
     <path fill={color} d="M32.9,5.8l2.4,3.3c0,0,37.2,13.5,19.2,58.7h10C64.6,67.8,76.9,14.9,32.9,5.8z"/>
 </g>
</g>
</svg>;

export default KnightSVG;