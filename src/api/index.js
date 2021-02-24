import axios from 'axios'

export const url = 'https://limitless-garden-85749.herokuapp.com/'

export const getAds = () => axios.get(url + 'ads?page=1&limit=16')

