// import React from "react";
// import StarRating from "./StarRating";
// import { FaTrash } from "react-icons/fa";

// export default function Color({ id, title, color, rating, onRemove = f => f, onRate = f => f }) {
//     return (
//         <section>
//             <h1>{title}</h1>
//             <button onClick={() => onRemove(id)}>
//                 <FaTrash />
//             </button>
//             <div style={{ height: 50, backgroundColor: color }} />
//             <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
//         </section>
//     );
// }


import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./providers/ColorProvider";

export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
        </section>
    );
}