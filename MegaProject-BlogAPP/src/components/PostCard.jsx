import React from 'react'
import {Link} from 'react-router-dom'
import databaseservice from '../AppWrite_Services/Database.js'

function PostCard({
    $id,
    tittle,
    featuredImage,
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-200 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={databaseservice.GetFilePreview(featuredImage)} alt={tittle} 
                className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>
                {tittle}
            </h2>

        </div>
    </Link>
  )
}

export default PostCard