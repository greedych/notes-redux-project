const initialState = {
  notes: [],
};

const notesReduser = (state = initialState, action) => {
  if (action.type === "ADD_NOTE") {
    return {
      ...state,
      notes: [...state.notes, action.payload],
    };
  }

  if (action.type === "REMOVE_NOTE") {
    return {
      ...state,
      notes: state.notes.filter((note) => note.id !== action.payload),
    };
  }

  return state;
};

export default notesReduser;
