import React, { useState, useRef } from "react";

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
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const submit = e => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="color title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input
                type="color"
                value={color}
                onChange={e => setColor(e.target.value)}
                required
            />
            <button>ADD</button>
        </form>
    )
}