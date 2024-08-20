import React, { useState, useEffect } from "react";
import './Post.css'

const BASE_URL = 'http://localhost:8000/'


function Post({post_fast_api}) {

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(BASE_URL + post_fast_api.image_url)
  }, []);

  const handleDelete = (event) => {
    event?.preventDefault()

    const requestOptions = {
      method: 'DELETE'
    }

      fetch(BASE_URL + "post/delete/" + post_fast_api.id, requestOptions)
        .then(response => {
          if (response.ok) {
            window.location.reload()
          }
          throw response
        })
        .catch(error => {
          console.log(error)
        })
  }

  const handleEdit = (event) => {
    event?.preventDefault()

  }

  return (
    <div className="post">
      <img className="post-image" src={imageUrl} alt="a photo of a city"/>
      <div className="post-container">
        <div className="post-title">{post_fast_api.title}</div>
        <div className="post-subtitle">{post_fast_api.subtitle}</div>
        <div className="post-author">by {post_fast_api.creator} date: {post_fast_api.date}</div>
        <div className="post-content">{post_fast_api.content}</div>
        <div className="buttons">
        <div className="button-delete">
          <button onClick={handleDelete}>Delete</button>
        </div>
          <div className="button-edit">
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Post