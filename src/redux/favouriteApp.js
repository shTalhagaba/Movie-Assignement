import remove from 'lodash.remove'

// Action Types

export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE'

// Action Creators

export function addFavourite(favourite) {
  return {
    type: ADD_FAVOURITE,
    favourite
  }
}

export function deleteFavourite(id) {
  return {
    type: DELETE_FAVOURITE,
    payload: id
  }
}

// reducer

const initialState = {
  favouriteIDs: [],
  favouriteList: []
}

function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        favouriteIDs: [...state.favouriteIDs ,action.favourite.id],
        favouriteList: [...state.favouriteList ,action.favourite],
      }

    case DELETE_FAVOURITE:
      if(state.favouriteIDs && state.favouriteIDs.length>1){
        let ids = state.favouriteIDs.filter(item => item === action.payload)
        let list = state.favouriteList.filter(item => item.id === action.payload)
        return {
          favouriteIDs: ids,
          favouriteList: list
        }
      }else{
        return {
          favouriteIDs: [],
          favouriteList: []
        }
      }

    default:
      return state
  }
}

export default favouriteReducer