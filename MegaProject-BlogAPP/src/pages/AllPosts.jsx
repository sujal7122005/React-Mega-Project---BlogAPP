import React from 'react'
import Container from '../components/container/container.jsx'
import databaseservice from '../AppWrite_Services/Database.js'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard.jsx'

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        databaseservice.ListDocuments()
            .then((fetchedPosts) => {
                // changed here
                // fetched object don't have .length property, it has .documents which is an array of documents
                //so i use .documents to access the array of posts
                if (fetchedPosts && fetchedPosts.documents) {
                    setPosts(fetchedPosts.documents);
                }
            }).catch((error) => {
                console.error("Error fetching posts:", error);
            });
            
    }, []);
  return (
    <div className='w-full py-12'>
        <Container>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-slate-800'>All Posts</h1>
                <p className='text-slate-500 mt-2'>Browse all published posts</p>
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

export default AllPosts