import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Butten from "./Butten.jsx";
import Input from "./Input.jsx";
import RTE from "./RTE.jsx";
import Select from "./Select.jsx"; 
import databaseservice from "../../src/AppWrite_Services/Database.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            tittle: post?.tittle || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        console.log("data :", data);
        
        
        if (post) {
            const file = data.image[0] ? await databaseservice.UploadFile(data.image[0]) : null;

            if (file) {
                databaseservice.DeleteFile(post.featuredImage);
            }

            const dbPost = await databaseservice.UpdateDocument(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await databaseservice.UploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await databaseservice.CreateDocument({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "tittle") {
                setValue("slug", slugTransform(value.tittle), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="w-full lg:w-2/3 px-2">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">{post ? 'Edit Post' : 'Create New Post'}</h2>
                <Input
                    label="Title"
                    placeholder="Enter your post title"
                    className="mb-4"
                    {...register("tittle", { required: true })}
                />
                <Input
                    label="Slug"
                    placeholder="post-url-slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-full lg:w-1/3 px-2 mt-6 lg:mt-0">
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-700 mb-4">Post Settings</h3>
                    <Input
                        label="Featured Image"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full mb-4 rounded-xl overflow-hidden">
                            <img
                                src={databaseservice.GetFilePreview(post.featuredImage)}
                                alt={post.tittle}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-6"
                        {...register("status", { required: true })}
                    />
                    <Butten 
                    type="submit" 
                    backgroundColor={post ? "bg-gradient-to-r from-emerald-500 to-green-500" : undefined} 
                    className="w-full py-3">
                        {post ? "Update Post" : "Publish Post"}
                    </Butten>
                </div>
            </div>
        </form>
    );
}