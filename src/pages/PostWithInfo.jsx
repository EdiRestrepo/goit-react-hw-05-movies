import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const PostWithInfo = () => {
    const {id} = useParams();
  return (
    <>
        <div>Post {id}</div>
        <h2>More info</h2>
    </>
  )
}