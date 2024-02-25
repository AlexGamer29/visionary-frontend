// Store private and public routes here
import routesConfig from '../constants/route'
import { Home, Login, SignUp } from '../pages'
import { UserProfile } from '../components'

const publicRoutes = [
  { path: routesConfig.login, component: Login, layout: null },
  { path: routesConfig.register, component: SignUp, layout: null },
]

const privateRoutes = [
  { path: routesConfig.home, component: Home },
  { name: 'View profile', path: routesConfig.profile, component: UserProfile },
  {
    name: 'Account settings',
    path: routesConfig.accountSettings,
    component: UserProfile,
  },
]

export { publicRoutes, privateRoutes }
