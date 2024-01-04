import React from "react";
import notes from "./notes";

function NoteCard(props) {
    return (
        <div className="main-note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

function createNote(notes) {
    return (
        <NoteCard
            key = {notes.key}
            title = {notes.title}
            content = {notes.content}
        />
    );
}

function Note() {
    return (
        <>
            {notes.map(createNote)}
        </>
        
    );
}

export default Note;