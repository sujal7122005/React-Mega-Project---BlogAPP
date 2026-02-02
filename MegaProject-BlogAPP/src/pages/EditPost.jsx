import React from 'react'
import Container from '../components/container/container.jsx'
import PostForm from '../components/PostForm.jsx'
import databaseservice from '../AppWrite_Services/Database.js'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (slug) {
            databaseservice.GetDocument(slug)
                .then((post) => {
                    if (post) {
                        setPost(post);
                    } else {
                        navigate('/'); // Redirect to home if post not found
                    }
            });
        }
    }, [slug, navigate]);
    
   return post ?
   (<div>
    <Container>
        <PostForm post={post} />
    </Container>
   </div>)
   : null
}

export default EditPost