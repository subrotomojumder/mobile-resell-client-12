import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import Main from '../Layout/Main'
import AddProduct from '../Pages/Dashboard/AddProduct'
import DisplayError from '../Pages/DisplayError'
import Home from '../Pages/Home/Home'
import Register from '../Pages/Login/Register'
import SignIn from '../Pages/Login/SignIn'
import PrivateRoute from './PrivateRoute'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <DisplayError />,
        children:[
            {
                path: '/dashboard/add-products',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])