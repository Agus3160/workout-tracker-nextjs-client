
type AuthStatus = 'loggedIn' | 'not loggedIn' | 'both' 

interface NavElement {
  title: string
  href: string
  auth: AuthStatus
  onClick?: () => void
}

export const navLink = [
  {
    title: 'Home',
    href: '/',
    auth: 'both'
  },
  {
    title: 'WorkOut-Plans',
    href: '/postcrafts',
    auth: 'both'
  },
  {
    title: 'SignUp',
    href: '/signup',
    auth: 'not loggedIn'
  },
  {
    title: 'LogIn',
    href: '/login',
    auth: 'not loggedIn'
  },
  {
    title: 'Profile',
    href: '/profile',
    auth: 'loggedIn'
  },
  {
    title: 'Logout',
    href: '/logout',
    auth: 'loggedIn' 
  }
]