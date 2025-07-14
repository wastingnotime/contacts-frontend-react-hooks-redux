import { createContactSuccess, updateContactSuccess, deleteContactSuccess, getAllContactsSuccess, getContactSuccess } from './internal'
import axios from 'axios'

const API_URL = '/api/contacts'

/* side effects */
export const createContact = contact =>
    dispatch => axios.post(API_URL, contact)
        .then(response => {
            const location = response.headers['location']
            contact.id = location.substring(location.lastIndexOf('/') + 1)
            dispatch(createContactSuccess(contact))
        })
        .catch(error => { throw (error) })

export const updateContact = (contact) =>
    dispatch => axios.put(`${API_URL}/${contact.id}`, contact)
        .then(() => dispatch(updateContactSuccess(contact)))
        .catch(error => { throw (error) })

export const deleteContact = id =>
    dispatch => axios.delete(`${API_URL}/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => { throw (error) })

export const getAllContacts = () =>
    dispatch => axios.get(API_URL)
        .then(response => dispatch(getAllContactsSuccess(response.data)))
        .catch(error => { throw (error) })

export const getContact = id =>
    dispatch => axios.get(`${API_URL}/${id}`)
        .then(response => dispatch(getContactSuccess(response.data)))
        .catch(error => { throw (error) })