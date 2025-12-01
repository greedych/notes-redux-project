export const addNote = (newNote) => {
  return {
    type: "ADD_NOTE",
    payload: newNote,
  };
};

export const removeNote = (id) => {
  return {
    type: "REMOVE_NOTE",
    payload: id,
  };
};

export const editNote = (editData) => {
  return {
    type: "EDIT_NOTE",
    payload: editData,
  };
};
