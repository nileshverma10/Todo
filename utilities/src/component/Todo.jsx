import React from 'react'

function ToDo(props) {

    return (
        <>
            <div className="todocross">
                <i className="fas fa-times" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default ToDo