import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import Main from '../Layout/Main'
import AllPhones from '../Pages/AllPhpone/AllPhones'
import AddProduct from '../Pages/Dashboard/AddProduct'
import AllSellers from '../Pages/Dashboard/AllSellers'
import Dashboard from '../Pages/Dashboard/Dashboard'
import MyOrders from '../Pages/Dashboard/MyOrders'
import MyProducts from '../Pages/Dashboard/MyProducts'
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
            },
            {
                path: 'category/:name',
                element: <PrivateRoute><AllPhones /></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.name}`),
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/add-products',
                element: <AddProduct />
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts />
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/all-sellers',
                element: <AllSellers/>
            }
        ]
    }
])