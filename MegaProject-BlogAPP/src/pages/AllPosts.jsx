import React from 'react'
import Container from '../components/container/container.jsx'
import databaseservice from '../AppWrite_Services/Database.js'
import { useEffect, useState } from 'react'

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        databaseservice.ListDocuments()
            .then((fetchedPosts) => {
                if (fetchedPosts && fetchedPosts.length > 0) {
                    setPosts(fetchedPosts.documents);
                }
            }).catch((error) => {
                console.error("Error fetching posts:", error);
            });
            
    }, []);
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts