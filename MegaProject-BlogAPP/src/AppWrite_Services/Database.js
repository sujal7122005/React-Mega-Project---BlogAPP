import config from '../config/config.js';

import { Client, ID, Databases, Storage, Query  } from "appwrite";

export class DatabaseService {
    Client = new Client();
    Databases;
    Storage;

    constructor() {
        this.Client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.Databases = new Databases(this.Client);
        this.Storage = new Storage(this.Client);
    }

    async CreateDocument({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.Databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: CreateDocument :: error", error);            
        }
    }

    async DeleteDocument(slug) {
        try {
            return await this.Databases.deleteDocument(
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

    async UpdateDocument(slug, {title, content, featuredImage, status}) {
        try {
            return await this.Databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
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
            await this.Databases.getDocument(
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
            return await this.Databases.listDocuments(
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
            await this.Storage.createFile(
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
            await this.Storage.deleteFile(
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
            return this.Storage.getFilePreview(
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