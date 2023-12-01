import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postSlice'

export const AddPostsForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostsClicked = () => {

        if (title === content) {
         dispatch (
            postAdded({
                id: nanoid(),
                title,
                content
            })
         )   
         setTitle('')
         setContent('')
        }
    }

  return (
    <section>
        <h2>Add new Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input 
                type="text" 
                name="postTitle" 
                id="postTitle" 
                value={title}
                onChange={onTitleChanged}/>
            <label htmlFor="postContent">Content:</label>
            <textarea 
                type="text" 
                name="postContent" 
                id="postContent" 
                value={content}
                onChange={onContentChanged}/>
            <button type='button' onClick={onSavePostsClicked}>Save Post</button>
        </form>
    </section>
  )
}
