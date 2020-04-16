import produce from 'immer';

const INITIAL_STATE = {
  deliveries: [],
};

export default function deliverie(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@deliverie/GET_REQUEST':
      return state;
    case '@deliverie/GET_SUCCESS':
      return produce(state, (draft) => {
        draft.deliveries = action.payload.deliveries;
      });
    case '@deliverie/CREATE_REQUEST':
      return state;
    case '@deliverie/CREATE_SUCCESS':
      return produce(state, (draft) => {
        draft.deliveries = [...draft.deliveries, action.payload.delivery];
      });
    case '@deliverie/UPDATE_REQUEST':
      return state;
    case '@deliverie/UPDATE_SUCCESS':
      return produce(state, (draft) => {
        draft.deliveries = draft.deliveries.map((obj) =>
          obj.id === action.payload.delivery.id ? action.payload.delivery : obj,
        );
      });
    case '@deliverie/DELETE_REQUEST':
      return state;
    case '@deliverie/DELETE_SUCCESS':
      return produce(state, (draft) => {
        draft.deliveries = action.payload.deliveries;
      });
    default:
      return state;
  }
}
