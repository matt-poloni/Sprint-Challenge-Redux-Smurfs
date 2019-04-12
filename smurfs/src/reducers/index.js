/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: true,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true,
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
      }
      case ADD_SMURF_START:
      return {
        ...state,
        error: '',
        addingSmurf: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        addingSmurf: false,
        smurfs: action.payload,
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false,
      }
    case UPDATE_SMURF_START:
      return {
        ...state,
        error: '',
        updatingSmurf: true,
      }
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        updatingSmurf: false,
        smurfs: action.payload,
      }
    case UPDATE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingSmurf: false,
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        error: '',
        deletingSmurf: true,
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        deletingSmurf: false,
        smurfs: action.payload,
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingSmurf: false,
      }
    default:
      return state;
  }
}
