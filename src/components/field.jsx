import React from "react"
import '../scss/style.scss'; 
import '../scss/components/_field.scss';

function Field({ label, type, content, value, onChange, placeholder, className }) {
    return (
        <div className="field-content">
            <label htmlFor={content}>{label}</label>
            <input className={className} type={type} id={content} name={content} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default Field;