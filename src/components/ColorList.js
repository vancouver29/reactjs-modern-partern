// import React from "react";
// import Color from "./Color";

// export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {
//     if (!colors.length) return <div>No Colors Listed.</div>;
//     return (
//         <div>
//             {colors.map(color =>
//                 <Color key={color.id}
//                     {...color}
//                     onRemove={onRemoveColor}
//                     onRate={onRateColor}
//                 />)
//             }
//         </div>
//     );
// }


// import React, { useContext } from "react";
// import { ColorContext } from "../index";
// import Color from "./Color";

// export default function ColorList() {
//     const { colors } = useContext(ColorContext);
//     if (!colors.length) return <div>No Colors Listed.</div>;
//     return (
//         <div className="color-list">
//             {colors.map(color => <Color key={color.id} {...color} />)}
//         </div>
//     );
// }


import React from "react";
import { useColors } from "./providers/ColorProvider";
import Color from "./Color";

export default function ColorList() {
    const { colors } = useColors();
    if (!colors.length) return <div>No Colors Listed.</div>;
    return (
        <div className="color-list">
            {colors.map(color => <Color key={color.id} {...color} />)}
        </div>
    );
}