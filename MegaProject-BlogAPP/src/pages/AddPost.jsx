import React from 'react'
import Container from '../components/container/container.jsx'
import PostForm from '../components/PostForm.jsx'

function AddPost() {
  return (
    <div className='py-10'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost