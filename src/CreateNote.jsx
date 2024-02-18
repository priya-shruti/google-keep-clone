import React, { useState } from "react";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const InputEvent = (event) => {

        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };
    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: "",
        });
    };
    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"></input>
                    <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a Note:"></textarea>
                    <button onClick={addEvent} className="plus">
                        <i class="fa fa-plus"></i>
                    </button>

                </form>
            </div>
        </>
    );
}


export default CreateNote;