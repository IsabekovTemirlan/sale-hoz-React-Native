import { LOAD_ADS } from '../types'

const initialState = {
  allAds: []
}

export const adsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ADS:
      return {...state, allAds: action.payload}
    default:
      return state
  }
}
