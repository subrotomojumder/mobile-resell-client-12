import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import Main from '../Layout/Main'
import AboutUs from '../Pages/AboutUs/AboutUs'
import AllPhones from '../Pages/AllPhpone/AllPhones'
import Blog from '../Pages/Blog'
import AddProduct from '../Pages/Dashboard/AddProduct'
import AllBuyers from '../Pages/Dashboard/AllBuyers'
import AllSellers from '../Pages/Dashboard/AllSellers'
import Dashboard from '../Pages/Dashboard/Dashboard'
import MyOrders from '../Pages/Dashboard/MyOrders'
import MyProducts from '../Pages/Dashboard/MyProducts'
import ReportItems from '../Pages/Dashboard/ReportItems'
import DisplayError from '../Pages/DisplayError'
import Home from '../Pages/Home/Home'
import Register from '../Pages/Login/Register'
import SignIn from '../Pages/Login/SignIn'
import Payment from '../Pages/Payment'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'
import SellerRoute from './SellersRoute'
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
                path:'/aboutUs',
                element: <AboutUs/>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><AllPhones /></PrivateRoute>,
                loader: async ({ params }) => fetch(`${process.env.REACT_APP_SERVER_url}/category/${params.name}`),
            },
            {
                path: '/blog',
                element: <Blog />
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
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: '/dashboard/add-products',
                element: <SellerRoute><AddProduct /></SellerRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/my-orders',
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers /></AdminRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers /></AdminRoute>
            },
            {
                path: '/dashboard/reported-items',
                element: <AdminRoute><ReportItems /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment /></PrivateRoute>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_SERVER_url}/orders/${params.id}`)
            },
        ]
    }
])