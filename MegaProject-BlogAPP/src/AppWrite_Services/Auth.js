import config from '../config/config.js';

import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    account;
    constructor() {
        this.Client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.Client);
    }

    async CreateAccount(email, password, name) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another functionality
                this.Login(email, password);
    
            } else {
                return userAccount;
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }
    
    async Login(email, password) {
        try {
            // createEmailPasswordSession takes email and password as separate arguments
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    
    // async Logout() {
    //     try {

    //         return await this.account.deleteSessions();
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    async Logout() {
        try {
            const session = await this.account.get(); // check if session exists
            if (session) {       
                await this.account.deleteSessions();
            }
        } catch (error) {
            console.log("User already logged out or no session", error);
        }
    }

    
    async GetCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // Return null if no user is logged in instead of throwing
            console.log("Appwrite service :: GetCurrentUser :: error", error);
            return null;
        }
    }
}


const authservice = new AuthService();

export default authservice;