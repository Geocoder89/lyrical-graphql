import React, { useState } from 'react'

const LyricCreate = ({songId, onLyricCreate}) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e)=> {
    e.preventDefault()
    onLyricCreate(songId,content)
    setContent('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Add a Lyric</label>
      <input type='text' id={content} value={content} onChange={(e)=> setContent(e.target.value)}/>
    </form>
  )
}

export default LyricCreate