import { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions";

function NoteForm({ dispatch }) {
  const [noteData, setNoteData] = useState({
    title: "",
    text: "",
    id: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData({ ...noteData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteData((prev) => ({
      ...prev,
      id: prev.id + 1,
    }));
    dispatch(addNote(noteData));
    setNoteData((prev) => ({
      ...prev,
      title: "",
      text: "",
      id: prev.id,
    }));
  };

  console.log(noteData);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={noteData.title}
        onChange={(e) => handleChange(e)}
      />
      <textarea
        value={noteData.text}
        name="text"
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button>Add Note</button>
    </form>
  );
}

const MapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(MapStateToProps)(NoteForm);
