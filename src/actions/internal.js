import { GET_ALL_CONTACTS, CREATE_CONTACT, UPDATE_CONTACT, GET_CONTACT, DELETE_CONTACT } from './types'

/* pure functions */
export const getAllContactsSuccess = contacts => ({
    type: GET_ALL_CONTACTS,
    payload: contacts
})

export const createContactSuccess = contact => ({
    type: CREATE_CONTACT,
    payload: contact
})

export const deleteContactSuccess = id => ({
    type: DELETE_CONTACT,
    payload: { id }
})

export const updateContactSuccess = contact => ({
    type: UPDATE_CONTACT,
    payload: contact
})

export const getContactSuccess = contact => ({
    type: GET_CONTACT,
    payload: contact
})