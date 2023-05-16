import React, { useState } from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

export default function StarRating({ selectedStars = 0, totalStars = 5, onRate = f => f }) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>{selectedStars} of {totalStars} stars</p>
        </>
    );
}