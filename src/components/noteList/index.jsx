import { connect } from "react-redux";

function NoteList({ notes }) {
  console.log(notes);
  return (
    <div>
      {notes.map((note) => {
        return (
          <div>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
          </div>
        );
      })}
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(MapStateToProps)(NoteList);
