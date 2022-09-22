import React from "react";

function Button({text,color,showAddFun}) {
    return (
        <>
            <button style={{background:color}} className="btn" onClick={showAddFun}>{text}</button>
        </>
    );
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button;
