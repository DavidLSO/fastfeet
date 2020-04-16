export function getRequest() {
  return {
    type: "@recipient/GET_REQUEST",
  };
}

export function getSuccess(recipients) {
  return {
    type: "@recipient/GET_SUCCESS",
    payload: { recipients },
  };
}

export function createRequest(data) {
  return {
    type: "@recipient/CREATE_REQUEST",
    payload: { data },
  };
}

export function createSuccess(recipient) {
  return {
    type: "@recipient/CREATE_SUCCESS",
    payload: { recipient },
  };
}

export function updateRequest(data, id) {
  return {
    type: "@recipient/UPDATE_REQUEST",
    payload: { data, id },
  };
}

export function updateSuccess(recipient) {
  return {
    type: "@recipient/UPDATE_SUCCESS",
    payload: { recipient },
  };
}
