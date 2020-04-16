import produce from "immer";

const INITIAL_STATE = {
  recipients: [],
};

export default function recipient(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@recipient/GET_REQUEST":
      return state;
    case "@recipient/GET_SUCCESS":
      return produce(state, (draft) => {
        draft.recipients = action.payload.recipients;
      });
    case "@recipient/CREATE_REQUEST":
      return state;
    case "@recipient/CREATE_SUCCESS":
      return produce(state, (draft) => {
        draft.recipients = [...draft.recipients, action.payload.recipient];
      });
    case "@recipient/UPDATE_REQUEST":
      return state;
    case "@recipient/UPDATE_SUCCESS":
      return produce(state, (draft) => {
        draft.recipients = draft.recipients.map((obj) =>
          obj.id === action.payload.recipient.id
            ? action.payload.recipient
            : obj
        );
      });
    default:
      return state;
  }
}
