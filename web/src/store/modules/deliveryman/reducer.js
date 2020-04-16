import produce from "immer";

const INITIAL_STATE = {
  deliverymans: [],
};

export default function deliveryman(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@deliveryman/GET_REQUEST":
      return state;
    case "@deliveryman/GET_SUCCESS":
      return produce(state, (draft) => {
        draft.deliverymans = action.payload.deliverymans;
      });
    case "@deliveryman/CREATE_REQUEST":
      return state;
    case "@deliveryman/CREATE_SUCCESS":
      return produce(state, (draft) => {
        draft.deliverymans = [
          ...draft.deliverymans,
          action.payload.deliveryman,
        ];
      });
    case "@deliveryman/UPDATE_REQUEST":
      return state;
    case "@deliveryman/UPDATE_SUCCESS":
      return produce(state, (draft) => {
        draft.deliverymans = draft.deliverymans.map((obj) =>
          obj.id === action.payload.deliveryman.id
            ? action.payload.deliveryman
            : obj
        );
      });
    case "@deliveryman/DELETE_REQUEST":
      return state;
    case "@deliveryman/DELETE_SUCCESS":
      return produce(state, (draft) => {
        draft.deliverymans = action.payload.deliverymans;
      });
    default:
      return state;
  }
}
