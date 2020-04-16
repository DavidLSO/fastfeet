import produce from "immer";

const INITIAL_STATE = {
  problems: [],
};

export default function problems(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@problem/GET_REQUEST":
      return state;
    case "@problem/GET_SUCCESS":
      return produce(state, (draft) => {
        draft.problems = action.payload.problems;
      });
    case "@problem/DELETE_REQUEST":
      return state;
    case "@problem/DELETE_SUCCESS":
      return produce(state, (draft) => {
        draft.problems = action.payload.problems;
      });
    default:
      return state;
  }
}
