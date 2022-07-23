import {
  CHANGE_SEARCH_VALUE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
} from "./constants"

const initialStateSearch = {
  searchValue: "",
}

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: null,
}

export const reducerSearchValue = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload }

    default:
      return state
  }
}

export const reducerFetchRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }

    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false }

    case REQUEST_ROBOTS_FAILURE:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}
