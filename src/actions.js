import {
  CHANGE_SEARCH_VALUE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
} from "./constants"

export const setSearchValue = (payload) => ({
  type: CHANGE_SEARCH_VALUE,
  payload,
})

export const fetchRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await res.json()

    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
    return data
  } catch (err) {
    dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: err })
    throw new Error("failed fetch robots")
  }
}
