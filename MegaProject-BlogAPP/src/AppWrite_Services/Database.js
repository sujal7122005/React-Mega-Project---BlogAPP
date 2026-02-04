import config from '../config/config.js';

import { Client, ID, Databases, Storage, Query  } from "appwrite";

export class DatabaseService {
    Client = new Client();
    databases;
    storage;

    constructor() {
        this.Client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.storage = new Storage(this.Client);
    }

    // async CreateDocument({title, slug, content, featuredImage, status, userId}) {
    //     try {
    //         return await this.databases.createDocument(
    //             config.appwriteDatabaseId,
    //             config.appwriteCollectionId,
    //             slug,
    //             {
    //                 title,
    //                 content,
    //                 featuredImage,
    //                 status,
    //                 userId
    //             }
    //         )
    //     } catch (error) {
    //         console.log("Appwrite service :: CreateDocument :: error", error);            
    //     }
    // }

    

    async CreateDocument({ tittle, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
                tittle,
                slug,
                content,
                featuredImage,
                status,
                userId,
            }
            );
        } catch (error) {
            console.log("Appwrite service :: CreateDocument :: error", error);
            throw error;
        }
        }


    async DeleteDocument(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: DeleteDocument :: error", error);
            return false;
        }
    }

    async UpdateDocument(slug, {tittle, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: UpdateDocument :: error", error);
        }
    }

    async GetDocument(slug) {
        try {
            await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: GetDocument :: error", error);
            
        }
    }

    async ListDocuments(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
            
        } catch (error) {
            console.log("Appwrite service :: ListDocuments :: error", error);
        }
    }

    // Storage Service Methods

    async UploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: UploadFile :: error", error);
            return false;
        }
    }

    async DeleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
                
            return true;

        } catch (error) {
            console.log("Appwrite service :: DeleteFile :: error", error);
            return false;
        }
    }

    async GetFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: GetFilePreview :: error", error);
        }
    }

}
const databaseservice = new DatabaseService();
export default databaseservice;