// Store private and public routes here
import routesConfig from '../constants/route'
import { Home, Login, SignUp } from '../pages'

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.login, component: Login, layout: null },
  { path: routesConfig.register, component: SignUp, layout: null },
]
// const privateRoutes = [
//   { path: routesConfig.profile_edit, component: EditEmployee },
//   { path: routesConfig.employees, component: Employees },
//   { path: routesConfig.add_employee, component: AddEmployees },
// ]

export { publicRoutes }
