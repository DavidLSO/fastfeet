export function getRequest() {
  return {
    type: "@deliverie/GET_REQUEST",
  };
}

export function getSuccess(deliveries) {
  return {
    type: "@deliverie/GET_SUCCESS",
    payload: { deliveries },
  };
}

export function createRequest(data) {
  return {
    type: "@deliverie/CREATE_REQUEST",
    payload: { data },
  };
}

export function createSuccess(delivery) {
  return {
    type: "@deliverie/CREATE_SUCCESS",
    payload: { delivery },
  };
}

export function updateRequest(data, id) {
  return {
    type: "@deliverie/UPDATE_REQUEST",
    payload: { data, id },
  };
}

export function updateSuccess(delivery) {
  return {
    type: "@deliverie/UPDATE_SUCCESS",
    payload: { delivery },
  };
}

export function deleteRequest(id) {
  return {
    type: "@deliverie/DELETE_REQUEST",
    payload: { id },
  };
}

export function deleteSuccess(deliveries) {
  return {
    type: "@deliverie/DELETE_SUCCESS",
    payload: { deliveries },
  };
}
