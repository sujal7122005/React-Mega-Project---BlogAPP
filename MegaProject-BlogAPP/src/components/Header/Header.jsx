import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import LogoutBtn from '../Header/LogoutBtn.jsx'
import Container from '../container/container.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Butten from '../Butten.jsx'
// butten changed here 
function Header() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.status);

  const NavItems = [
    {
      name: 'Home',
      slug : '/',
      active : true
    },
    {
      name : 'Login',
      slug : '/login',
      active : !isAuthenticated
    },
    {
      name : 'Signup',
      slug : '/signup',
      active : !isAuthenticated
    },
    {
      name : 'All Posts',
      slug : '/All-posts',
      active : isAuthenticated
    },
    {
      name : 'Add Post',
      slug : '/add-post',
      active : isAuthenticated
    },
  ]
  return (
    <header className='py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <Logo width='150px' />
            </Link>
          </div>
          <ul className='flex items-center gap-1'>
            {NavItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <Butten
                onClick={() => navigate(item.slug)}
                backgroundColor='bg-transparent'
                textcolor='text-slate-700'
                className='font-medium hover:bg-slate-100 hover:text-indigo-600 px-4 py-2 rounded-lg transition-all duration-200'
                >{item.name}
                </Butten>
              </li>
            ) : null
            )}
            {isAuthenticated && (
              <li className='ml-2'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header