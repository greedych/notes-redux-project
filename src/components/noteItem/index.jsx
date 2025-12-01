import { connect } from "react-redux";

function NoteItem({ title, text, id, dispatch }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default connect()(NoteItem);
