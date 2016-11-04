export const RECEIVE_ALL_GROUPS = "RECEIVE_ALL_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const FETCH_ALL_GROUPS = "FETCH_ALL_GROUPS";
export const FETCH_GROUP = "FETCH_GROUP";
export const CREATE_GROUP = "CREATE_GROUP";
export const UPDATE_GROUP = "UPDATE_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveAllGroups = () => ({
  type: RECEIVE_ALL_GROUPS
});

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const fetchGroup = id => ({
  type: FETCH_GROUP,
  id
});

export const fetchGroups = () => ({
  type: FETCH_ALL_GROUPS
});

export const createGroup = group => ({
  type: CREATE_GROUP,
  group
});

export const updateGroup = group => ({
  type: UPDATE_GROUP,
  group
});

export const deleteGroup = id => ({
  type: DELETE_GROUP,
  id
});

export const removeGroup = post => ({
  type: REMOVE_GROUP,
  post
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});