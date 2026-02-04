import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import  store  from './ReduxConfiguration/store.js'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Protected_AuthLayout from './components/Protected_AuthLayout.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'
import AddPost from './pages/AddPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import HomePage from './pages/HomePage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: (
                <Protected_AuthLayout Authenticated={true}>
                    <LoginPage />
                </Protected_AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <Protected_AuthLayout Authenticated={false}>
                    <SignUpPage />
                </Protected_AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Protected_AuthLayout Authenticated>
                    {" "}
                    <AllPosts />
                </Protected_AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protected_AuthLayout Authenticated>
                    {" "}
                    <AddPost />
                </Protected_AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protected_AuthLayout Authenticated>
                    {" "}
                    <EditPost />
                </Protected_AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
