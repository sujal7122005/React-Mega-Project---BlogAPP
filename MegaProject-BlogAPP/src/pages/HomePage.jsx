import React from 'react'
import Container from '../components/container/container.jsx'
import databaseservice from '../AppWrite_Services/Database.js'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard.jsx'


function HomePage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        databaseservice.ListDocuments()
            .then((response) => {
                if (response && response.documents) {
                    setPosts(response.documents);
                }
            })
            .catch((error) => {
                console.error("Error fetching documents:", error);
            });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-20 text-center">
                <Container>
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-800 mb-2">
                            No posts yet
                        </h1>
                        <p className="text-slate-500">Be the first to create a post and share your thoughts!</p>
                    </div>
                </Container>
            </div>
        )
    }

  return (
    <div className='w-full py-12'>
            <Container>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-slate-800'>Latest Posts</h1>
                    <p className='text-slate-500 mt-2'>Discover stories, thinking, and expertise from writers on any topic.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
  )
}

export default HomePage