import React, { useState, useRef } from "react";
import { useInput } from "../hooks/useInput";



// export default function AddColorForm({ onNewColor = f => f }) {
//     const txtTitle = useRef();
//     const hexColor = useRef();

//     const submit = e => {
//         e.preventDefault();
//         const title = txtTitle.current.value;
//         const hexColor = hexColor.current.value;
//         onNewColor(title, hexColor);
//         txtTitle.current.value = "";
//         hexColor.current.value = "";
//     }

//     return (
//         <form onSubmit={submit}>
//             <input ref={txtTitle} type="text" placeholder="color title..." required />
//             <input ref={hexColor} type="color" required />
//         </form>
//     )
// }

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="color title..."
                required
                {...titleProps}
            />
            <input
                type="color"
                required
                {...colorProps}
            />
            <button>ADD</button>
        </form>
    )
}