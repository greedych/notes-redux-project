import { connect } from "react-redux";
import { editNote, removeNote } from "../../redux/actions";
import { useState } from "react";

function NoteItem({ title, text, id, dispatch }) {
  const [isEdited, setIsEdited] = useState(false);
  const [noteData, setNoteData] = useState({
    title: title,
    text: text,
    id: id,
  });

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeNote(id));
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    if (isEdited) {
      setIsEdited(false);
    } else {
      setIsEdited(true);
    }
  };

  const EditChange = (e) => {
    const { name, value } = e.target;
    setNoteData({ ...noteData, [name]: value });
  };

  const EditSubmit = (e) => {
    e.preventDefault();
    dispatch(editNote(noteData));
    setIsEdited(false);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      {isEdited && (
        <form onSubmit={EditSubmit}>
          <input
            type="text"
            name="title"
            onChange={(e) => EditChange(e)}
            value={noteData.title}
          />
          <input
            type="text"
            name="text"
            onChange={(e) => EditChange(e)}
            value={noteData.text}
          />
          <button>Submit</button>
        </form>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}

export default connect()(NoteItem);
