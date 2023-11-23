import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}



const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  console.log(isAuthenticated)

  return <>
    <header className='flex justify-between py-4 xl:px-64'>
      <h1 className='font-semibold'>
        <Link to={routes.home()}>
          inTellee College
        </Link>
      </h1>
      <nav>
        <ul className='flex gap-4'>
          <li><Link to={routes.home()}>Home</Link></li>
          <li><Link to={routes.allcourses()}>Courses</Link></li>
          <li><Link to={routes.about()}>About</Link></li>
          <li><Link to={routes.contact()}>Contact</Link></li>
          <li><Link to={routes.courses()}>Admin</Link></li>
        </ul>
      </nav>
      {isAuthenticated ? (
        <div>
          <span>Logged in as {currentUser?.email}</span>{' '}
          <button type='button' onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
    </header>
    <main>
      {children}
    </main>
  </>
}

export default MainLayout
