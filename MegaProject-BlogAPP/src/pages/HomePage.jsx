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
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No post available
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

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

export default HomePage