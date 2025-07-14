import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactList from './components/ContactList.jsx'
import ContactForm from './components/ContactForm.jsx'
import Layout from './components/Layout.jsx'
import './App.css'

const router = createBrowserRouter([
    {
        element: (<Layout> <Outlet /> </Layout>),
        children: [
            {
                path: "/",
                exact: true,
                element: <ContactList />,
            },
            {
                path: "/new",
                element: <ContactForm />
            },
            {
                path: "/edit/:id",
                element: <ContactForm />
            }
        ]
    }
])

export default () => (<RouterProvider router={router} />)