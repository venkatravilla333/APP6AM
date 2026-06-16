import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../actionCreators'

function F() {
let state =  useSelector((state) => {
   return state
})
 let dispatch = useDispatch()
  // function getData() {
  //   dispatch(fetchPosts())
  // }
  useEffect(() => {
      dispatch(fetchPosts())
  }, [])
console.log('render')
  return (
    <div>
      <h1>Posts</h1>
      {/* <button onClick={getData}>get data</button> */}
      {state.loading ? <h1>Loading</h1> : state.error ? <h2>{state.error}</h2> : state.posts?.data?.map((post) => {
        return <div key={post.id} style={{border: "2px solid red", margin: "10px", padding: "10px"}}>
          <h3>Userid: {post.userId}</h3>
          <h3>id: {post.id}</h3>
          <h3>Title: {post.title}</h3>
          <h3>Body: {post.body}</h3>
        </div>
      })}
    </div>
  )
}

export default F