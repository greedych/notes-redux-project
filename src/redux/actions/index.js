export const addNote = (newNote) => {
  return {
    type: "ADD_NOTE",
    payload: newNote,
  };
};

export const removeNote = (deleteNote) => {
  return {
    type: "REMOVE_NOTE",
    payload: deleteNote,
  };
};
