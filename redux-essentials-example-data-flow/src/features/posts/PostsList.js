import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const PostsList = () => {

    const posts = useSelector(state => state.posts)

    const renderPosts = posts.map(post => (
        <article>
            <h3>{post.title}</h3>
            <p className='post-content'>{post.content.substring(0, 1000)}</p>
            <Link to={`/posts/${post.id}`} className='button muted-button'>
              View Posts
            </Link>
        </article>
    ))
  return (
    <section className='posts-list'>
        <h2>Posts</h2>
        {renderPosts}
    </section>
  )
}

 
