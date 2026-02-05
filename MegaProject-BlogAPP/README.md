# 📝 SupaBlog - React Blog Application

A modern, full-featured blog application built with React and Appwrite. Create, edit, and share your stories with the world!

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-Backend-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11-764ABC?style=for-the-badge&logo=redux&logoColor=white)

## ✨ Features

- 🔐 **User Authentication** - Secure signup, login, and logout functionality
- 📝 **Create Posts** - Write blog posts with a rich text editor (TinyMCE)
- 🖼️ **Image Upload** - Add featured images to your blog posts
- ✏️ **Edit & Delete** - Full CRUD operations on your posts
- 🔒 **Protected Routes** - Authorization-based access control
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal development and production builds

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library
- **React Router DOM 7** - Client-side routing
- **Redux Toolkit** - State management
- **React Hook Form** - Form handling and validation
- **TailwindCSS 4** - Utility-first CSS framework
- **TinyMCE** - Rich text editor
- **HTML React Parser** - Parse HTML content safely

### Backend (BaaS)

- **Appwrite** - Backend as a Service
  - Authentication
  - Database (Documents)
  - Storage (File uploads)

### Build Tool

- **Vite** - Next generation frontend tooling

## 📁 Project Structure

```
MegaProject-BlogAPP/
├── public/                     # Static assets
├── src/
│   ├── AppWrite_Services/      # Appwrite service classes
│   │   ├── Auth.js             # Authentication service
│   │   └── Database.js         # Database & Storage service
│   │
│   ├── assets/                 # Images and static files
│   │   └── logo.png
│   │
│   ├── components/             # Reusable UI components
│   │   ├── container/
│   │   │   └── container.jsx   # Layout container
│   │   ├── Footer/
│   │   │   └── Footer.jsx      # Footer component
│   │   ├── Header/
│   │   │   ├── Header.jsx      # Navigation header
│   │   │   └── LogoutBtn.jsx   # Logout button
│   │   ├── Butten.jsx          # Custom button component
│   │   ├── Input.jsx           # Form input component
│   │   ├── Login.jsx           # Login form
│   │   ├── Logo.jsx            # Logo component
│   │   ├── PostCard.jsx        # Blog post card
│   │   ├── PostForm.jsx        # Create/Edit post form
│   │   ├── Protected_AuthLayout.jsx  # Route protection
│   │   ├── RTE.jsx             # Rich Text Editor
│   │   ├── Select.jsx          # Select dropdown
│   │   └── SignUp.jsx          # Signup form
│   │
│   ├── config/
│   │   └── config.js           # Environment configuration
│   │
│   ├── pages/                  # Page components
│   │   ├── AddPost.jsx         # Add new post page
│   │   ├── AllPosts.jsx        # All posts listing
│   │   ├── EditPost.jsx        # Edit post page
│   │   ├── HomePage.jsx        # Home page
│   │   ├── LoginPage.jsx       # Login page
│   │   ├── Post.jsx            # Single post view
│   │   └── SignUpPage.jsx      # Signup page
│   │
│   ├── ReduxConfiguration/     # Redux store setup
│   │   ├── authSlice.js        # Auth state slice
│   │   └── store.js            # Redux store
│   │
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point with routing
│
├── .env                        # Environment variables (create this)
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Appwrite account and project

### 1. Clone the Repository

```bash
git clone https://github.com/sujal7122005/React-Mega-Project---BlogAPP.git
cd React-Mega-Project---BlogAPP/MegaProject-BlogAPP
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Appwrite

1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io/)
2. Create a new project
3. Set up the following:

#### Database Setup

- Create a new Database
- Create a Collection with the following attributes:
  | Attribute | Type | Required |
  |-----------|------|----------|
  | `tittle` | String | Yes |
  | `slug` | String | Yes |
  | `content` | String | Yes |
  | `featuredImage` | String | Yes |
  | `status` | String | Yes |
  | `userId` | String | Yes |

#### Storage Setup

- Create a new Bucket for image uploads
- Set permissions:
  - **Users**: Create, Read, Update, Delete
  - **Any**: Read (for public image access)

#### Collection Permissions

- **Users**: Create, Read, Update, Delete

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_RTE_API_KEY=your_tinymce_api_key
```

> 📌 Get your TinyMCE API key from [TinyMCE](https://www.tiny.cloud/)

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🔄 Application Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   SignUp    │────▶│    Login    │────▶│   HomePage  │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                    ┌──────────────────────────┼──────────────────────────┐
                    ▼                          ▼                          ▼
            ┌─────────────┐            ┌─────────────┐            ┌─────────────┐
            │  All Posts  │            │  Add Post   │            │  View Post  │
            └─────────────┘            └─────────────┘            └─────────────┘
                                                                         │
                                                                         ▼
                                                                 ┌─────────────┐
                                                                 │  Edit Post  │
                                                                 └─────────────┘
```

## 🛡️ Route Protection

| Route              | Auth Required               | Description                 |
| ------------------ | --------------------------- | --------------------------- |
| `/`                | No                          | Home page with latest posts |
| `/login`           | No (redirects if logged in) | Login page                  |
| `/signup`          | No (redirects if logged in) | Signup page                 |
| `/all-posts`       | Yes                         | View all posts              |
| `/add-post`        | Yes                         | Create new post             |
| `/edit-post/:slug` | Yes                         | Edit existing post          |
| `/post/:slug`      | No                          | View single post            |

## 🎨 UI Components

### Core Components

- **Button** - Gradient styled button with hover effects
- **Input** - Form input with floating label
- **Select** - Dropdown select component
- **RTE** - Rich Text Editor powered by TinyMCE
- **PostCard** - Blog post preview card
- **Container** - Responsive layout wrapper

### Layout Components

- **Header** - Navigation with auth-aware menu items
- **Footer** - Site footer with links
- **Protected_AuthLayout** - HOC for route protection

## 🔧 Appwrite Services

### AuthService (`Auth.js`)

- `CreateAccount(email, password, name)` - Register new user
- `Login(email, password)` - User login
- `Logout()` - User logout
- `GetCurrentUser()` - Get current session

### DatabaseService (`Database.js`)

- `CreateDocument({...})` - Create new post
- `UpdateDocument(slug, {...})` - Update post
- `DeleteDocument(slug)` - Delete post
- `GetDocument(slug)` - Get single post
- `ListDocuments(queries)` - List all posts
- `UploadFile(file)` - Upload image
- `DeleteFile(fileId)` - Delete image
- `GetFilePreview(fileId)` - Get image URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Sujal Patel**

- GitHub: [@sujal7122005](https://github.com/sujal7122005)

---

<p align="center">
  Made with ❤️ using React & Appwrite
</p>
