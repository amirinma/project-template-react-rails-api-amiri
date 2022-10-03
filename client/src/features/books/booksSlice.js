// Action Creators
export const addBook = (book) => {
    return {
      type: "books/add",
      payload: book,
    };
  };
  
  export const removeBook = (id) => {
    return {
      type: "books/remove",
      payload: id,
    };
  };
  
  // Reducers
  const initialState = [];
  
  export default function booksReducer(state = initialState, action) {
    console.log("hello",action)
    switch (action.type) {
      case "books/add":
        return [...state, action.payload];
  
      case "books/remove":
        return state.filter((book) => book.id !== action.payload);
  
      default:
        return state;
    }
  }

// // actions
// const { increment, decrement, toggleRunning, incrementBy } = slice.actions

// // exports
// export { increment, decrement, toggleRunning, incrementBy }
// export default slice.reducer