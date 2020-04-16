export function getRequest() {
  return {
    type: "@problem/GET_REQUEST",
  };
}

export function getSuccess(problems) {
  return {
    type: "@problem/GET_SUCCESS",
    payload: { problems },
  };
}

export function deleteRequest(id) {
  return {
    type: "@problem/DELETE_REQUEST",
    payload: { id },
  };
}

export function deleteSuccess(problems) {
  return {
    type: "@problem/DELETE_SUCCESS",
    payload: { problems },
  };
}
