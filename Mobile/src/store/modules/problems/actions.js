export function getRequest(id) {
  return {
    type: '@problem/GET_REQUEST',
    payload: {id},
  };
}

export function getSuccess(problems) {
  return {
    type: '@problem/GET_SUCCESS',
    payload: {problems},
  };
}

export function createRequest(delivery_id, description) {
  return {
    type: '@problem/CREATE_REQUEST',
    payload: {delivery_id, description},
  };
}

export function createSuccess(problem) {
  return {
    type: '@problem/CREATE_SUCCESS',
    payload: {problem},
  };
}

export function deleteRequest(id) {
  return {
    type: '@problem/DELETE_REQUEST',
    payload: {id},
  };
}

export function deleteSuccess(problems) {
  return {
    type: '@problem/DELETE_SUCCESS',
    payload: {problems},
  };
}
