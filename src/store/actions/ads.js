import { LOAD_ADS } from '../types'
import { getAds } from "../../api"

export const loadAds = () => async (dispatch) => {
  try {
    const {data} = await getAds()
    
    dispatch({ type: LOAD_ADS, payload: data.results })
  } catch (error) {
    console.log(error.message);
  }
}