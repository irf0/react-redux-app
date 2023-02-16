const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    const newAmount = state - action.payload;
    return newAmount >= 0 ? newAmount : state;
  } else {
    return state;
  }
};
export default reducer;
