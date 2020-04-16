export function getRequest() {
  return {
    type: "@deliveryman/GET_REQUEST",
  };
}

export function getSuccess(deliverymans) {
  return {
    type: "@deliveryman/GET_SUCCESS",
    payload: { deliverymans },
  };
}

export function createRequest(data) {
  return {
    type: "@deliveryman/CREATE_REQUEST",
    payload: { data },
  };
}

export function createSuccess(deliveryman) {
  return {
    type: "@deliveryman/CREATE_SUCCESS",
    payload: { deliveryman },
  };
}

export function updateRequest(data, id) {
  return {
    type: "@deliveryman/UPDATE_REQUEST",
    payload: { data, id },
  };
}

export function updateSuccess(deliveryman) {
  return {
    type: "@deliveryman/UPDATE_SUCCESS",
    payload: { deliveryman },
  };
}

export function deleteRequest(id) {
  return {
    type: "@deliveryman/DELETE_REQUEST",
    payload: { id },
  };
}

export function deleteSuccess(deliverymans) {
  return {
    type: "@deliveryman/DELETE_SUCCESS",
    payload: { deliverymans },
  };
}
