import config from '../config/config.js';

import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    Account;
    constructor() {
        this.Client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.Account = new Account(this.Client);
    }

    async CreateAccount(email, password, name) {
        try {
            const userAccount = await this.Account.create(ID.unique(), email, password, name);
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
            return await this.Account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    
    async Logout() {
        try {
            return await this.Account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
    
    async GetCurrentUser() {
        try {
            return await this.Account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
}


const authservice = new AuthService();

export default authservice;