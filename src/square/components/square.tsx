import React from "react";
import {animated, SpringValue} from "@react-spring/web";


const AnimatedSquare = animated.div;

type SquareCompTypes = {
    color: string,
    style: {
        transform: SpringValue<string>
    }
}

export const SquareComp = ({ color, style } : SquareCompTypes) => {
    return (
        <AnimatedSquare
            style={{
                backgroundColor: color,
                width: '20%',
                height: '10%',
                margin: '15px 5px',
                ...style

            }}
        />
    )
}
