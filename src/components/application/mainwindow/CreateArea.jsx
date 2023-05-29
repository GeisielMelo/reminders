import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";


function CreateArea(props) {
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form
        className="create-note"
        onMouseEnter={() => setTextAreaVisible(true)}
        onMouseLeave={() => setTextAreaVisible(false)}
      >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {isTextAreaVisible ? (
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
        ) : null}

        <Zoom in={isTextAreaVisible}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;