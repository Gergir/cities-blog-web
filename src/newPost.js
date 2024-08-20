import React, { useState } from "react";
import './newPost.css'


const BASE_URL = 'http://localhost:8000/'

function NewPost() {

  const[image, setImage] = useState(null)
  const[title, setTitle] = useState("")
  const[subtitle, setSubtitle] = useState("")
  const[creator, setCreator] = useState("")
  const[content, setContent] = useState("")

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleCreate = (e) => {
    e?.preventDefault()

    const formData = new FormData()
    formData.append('image', image)

    const requestOptions = {
      method: 'POST',
      body: formData
    }

    fetch(BASE_URL + "post/new/image", requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw response
        }
      })
      .then(data => {
        createPost(data.filename)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setImage(null)
        document.getElementById('fileInput').value = null
      })

  }

  const createPost = (imageUrl) => {
    const json_string = JSON.stringify({
      'image_url': imageUrl,
      'title': title,
      'subtitle': subtitle,
      'creator': creator,
      'content': content
    })

    const requestOptions = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: json_string
    }

    fetch(BASE_URL + "post/new", requestOptions)
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        else {
          throw response
        }
      })
      .then(data => {
        window.location.reload()
        window.scrollTo(0,0)
      })
      .catch(error => {
        console.log(error);
      })

  }

  return (
    <div className="new-post-container">

      <div className="new-post-image">
        <input type="file" id="fileInput" onChange={handleImageUpload}/>
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
        <button className="button-create" onClick={handleCreate}>Create new post</button>
      </div>

    </div>
  );
}

export default NewPost
