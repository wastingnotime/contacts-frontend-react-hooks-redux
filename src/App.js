import React from 'react'
import { useRoutes } from 'hookrouter'
import { useDispatch } from 'react-redux'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import Layout from './components/Layout'
import './App.css'
import { getContact } from './actions'

export default () => {
  const dispatch = useDispatch()
  return useRoutes({
    '/': () => <Layout> <ContactList /> </Layout>,
    '/new': () => <Layout> <ContactForm /> </Layout>,
    '/edit/:id': ({ id }) => {
      dispatch(getContact(id))
      return <Layout> <ContactForm /> </Layout>
    }
  })
}

