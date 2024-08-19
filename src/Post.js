import React, { useState, useEffect } from "react";
import './Post.css'

const BASE_URL = 'http://localhost:8000/'


function Post({post_fast_api}) {

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setImageUrl(BASE_URL + post_fast_api.image_url)
  }, []);

  return (
    <div className="post">
      <img className="post-image" src={imageUrl} alt="a photo of a city"/>
      <div className="post-content">
        <div className="post-title">{post_fast_api.title}</div>
        <div className="post-subtitle">{post_fast_api.subtitle}</div>
        <div className="post-author">by {post_fast_api.creator} date: {post_fast_api.date}</div>
        <div className="post-content">{post_fast_api.content}</div>
        <div className="post-button-delete">
          <button onClick={null}>Delete Post</button>
        </div>
      </div>
    </div>
  )

}

export default Post