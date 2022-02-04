import React from "react";

const Lamp = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="139"
        height="192"
        viewBox="0 0 139 192"
      >
        <defs>
          <filter
            id="OFF"
            width="70"
            height="70"
            x="35"
            y="122"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3"></feOffset>
            <feGaussianBlur result="blur" stdDeviation="8"></feGaussianBlur>
            <feFlood floodColor="#002d67"></feFlood>
            <feComposite in2="blur" operator="in"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
          <filter
            id="Ellipse_10"
            width="70"
            height="70"
            x="35"
            y="122"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3"></feOffset>
            <feGaussianBlur result="blur-2" stdDeviation="8"></feGaussianBlur>
            <feFlood floodColor={props.shine}></feFlood>
            <feComposite in2="blur-2" operator="in"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
        </defs>
        <g data-name="light bulb" transform="translate(-204 4)">
          <g filter="url(#OFF)" transform="translate(204 -4)">
            <circle
              cx="11"
              cy="11"
              r="11"
              fill="#002d67"
              data-name="OFF"
              transform="translate(59 143)"
            ></circle>
          </g>
          <g filter="url(#Ellipse_10)" transform="translate(204 -4)">
            <circle
              cx="11"
              cy="11"
              r="11"
              fill={props.color}
              data-name="Ellipse 10"
              transform="translate(59 143)"
            ></circle>
          </g>
          <path
            fill="#fff"
            d="M30.334 1.617h79.054c3.314 0 4.206 2.324 6 6L139 62a6 6 0 01-6 6H6a6 6 0 01-6-6L24.334 7.617c1.503-3.38 2.686-6 6-6z"
            data-name="Path 100"
            transform="translate(204 85)"
          ></path>
          <path
            fill="#fff"
            d="M0 0H5V102H0z"
            data-name="Rectangle 13"
            transform="translate(271 -4)"
          ></path>
          <rect
            width="4"
            height="58"
            fill="#568bd0"
            data-name="Rectangle 14"
            opacity="0.151"
            rx="2"
            transform="rotate(-23 377.982 -700.142)"
          ></rect>
        </g>
      </svg>
    );
  }

export default Lamp;