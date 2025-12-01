import { connect } from "react-redux";
import NoteItem from "../noteItem";

function NoteList({ notes }) {
  console.log(notes);
  return (
    <div>
      {notes.map((note) => {
        return <NoteItem title={note.title} text={note.text} id={note.id} />;
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
