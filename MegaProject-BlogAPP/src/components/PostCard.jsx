import React from 'react'
import {Link} from 'react-router-dom'
import databaseservice from '../AppWrite_Services/Database.js'

function PostCard({
    $id,
    tittle,
    featuredImage,// This is the fileId stored in the database
}) {
    // Get the image URL from the fileId
    const imageUrl = featuredImage ? databaseservice.GetFilePreview(featuredImage) : null;
    
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100'>
            <div className='w-full aspect-video overflow-hidden'>
                {/* Using imageUrl which is now a proper string URL */}
                <img src={imageUrl} alt={tittle} 
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
            </div>
            <div className='p-5'>
                <h2 className='text-lg font-semibold text-slate-800 line-clamp-2 hover:text-indigo-600 transition-colors'>
                    {tittle}
                </h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard