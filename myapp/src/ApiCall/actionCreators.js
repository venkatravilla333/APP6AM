import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./actionTypes"

import axios from 'axios'


let fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}
let fetchPostSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  }
}
let fetchPostFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

export let fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        console.log(data)
        dispatch(fetchPostSuccess(data))
       })
      .catch((error) => {
      dispatch(fetchPostFailure(error.message))
    })
  }
}