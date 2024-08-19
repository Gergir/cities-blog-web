import React, { useState } from "react";
import './newPost.css'


const BASE_URL = 'http://localhost:8000/'

function NewPost() {

  const[image, setImage] = useState(null)
  const[title, setTitle] = useState("")
  const[subtitle, setSubtitle] = useState("")
  const[creator, setCreator] = useState("")
  const[content, setContent] = useState("")

  return (
    <div className="new-post-container">

      <div className="new-post-image">
        <input type="file" id="fileinput" onChange={null}/>
      </div>
      <div className="new-post-creator">
        <input className="new-post-creator" type="text" id="creator-input"
               placeholder="creator" onChange={(event) => setCreator(event.target.value)}
               value={creator}/>
      </div>
      <div className="new-post-title">
        <input className="new-post-title" type="text" id="title-input"
               placeholder="title" onChange={(event) => setTitle(event.target.value)}
               value={title}/>
      </div>
      <div className="new-post-subtitle">
        <input className="new-post-subtitle" type="text" id="title-input"
               placeholder="subtitle" onChange={(event) => setSubtitle(event.target.value)}
               value={subtitle}/>
      </div>
      <div className="new-post-content">
        <textarea className="new-post-content" rows="10" id="content-input"
               placeholder="content" onChange={(event) => setContent(event.target.value)}
               value={content}/>
      </div>
      <div>
        <button className="button-create" onClick={null}>Create new post</button>
      </div>

    </div>
  );
}

export default NewPost
