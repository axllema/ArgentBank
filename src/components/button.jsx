import React from "react"

function Button({ content, type, onClick, className }) {
    return (
        <button className={className} type={type} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button;
