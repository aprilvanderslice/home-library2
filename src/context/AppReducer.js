// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        // return the current saved books, add the new one in the payload.
        savedBooks: [action.payload, ...state.savedBooks],
      };
    case "DELETE_BOOK":
      return {
        ...state,
        // return all books except the one deleted
        savedBooks: state.savedBooks.filter(
          (book) => book.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

