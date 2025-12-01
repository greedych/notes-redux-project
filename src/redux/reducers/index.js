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

  return state;
};

export default notesReduser;
