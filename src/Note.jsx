import React from "react";

const Note = (props) => {
    const deleteNote =() =>{
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
            <h1>{props.title}</h1>
                <p> title </p>
                <br />
                <p>{props.content}</p>
                <button onClick={deleteNote} className="deleteIcon">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </>
    );
}


export default Note;