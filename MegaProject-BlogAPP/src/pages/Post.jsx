import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseservice from "../AppWrite_Services/Database.js";
import Butten from "../components/Butten.jsx";
import Container from "../components/container/container.jsx";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            databaseservice.GetDocument(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        databaseservice.DeleteDocument(post.$id).then((status) => {
            if (status) {
                databaseservice.DeleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12">
            <Container>
                <article className="max-w-4xl mx-auto">
                    <div className="w-full mb-8 relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={databaseservice.GetFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-400px object-cover"
                        />

                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Butten backgroundColor="bg-gradient-to-r from-emerald-500 to-green-500" className="shadow-lg">
                                        Edit
                                    </Butten>
                                </Link>
                                <Butten backgroundColor="bg-gradient-to-r from-rose-500 to-red-500" onClick={deletePost} className="shadow-lg">
                                    Delete
                                </Butten>
                            </div>
                        )}
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                        {/* Note: Using 'tittle' to match the field name in database */}
                        <h1 className="text-4xl font-bold text-slate-800 mb-6">{post.tittle}</h1>
                        <div className="prose prose-lg prose-slate max-w-none browser-css">
                            {parse(post.content)}
                        </div>
                    </div>
                </article>
            </Container>
        </div>
    ) : null;
}