import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createContact, updateContact, getContact } from '../actions'
import { useNavigate, useParams } from "react-router-dom"

export default () => {
    const [value, setValue] = useState({ firstName: '', lastName: '', phoneNumber: '' })
    const currentContact = useSelector(state => state.current)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (!params.id)
            return

        dispatch(getContact(params.id))
        return () => {
        };
    }, [params]);

    if (currentContact.id && !value.id)
        setValue({ ...currentContact })

    const handleSubmit = e => {
        e.preventDefault()
        if (value.firstName === '' || value.lastName === '' || value.phoneNumber === '') return
        const action = value.id ? updateContact : createContact

        dispatch(action(value))
        navigate('/')
    }

    const handleChange = e => setValue({ ...value, [e.target.id]: e.target.value })

    return (
        <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="firstName">First name:</label>
            <input type="text" placeholder="First name" className="input" id="firstName" value={value.firstName} onChange={handleChange} />
            <label className="label" htmlFor="lastName">Last name:</label>
            <input type="text" placeholder="Last name" className="input" id="lastName" value={value.lastName} onChange={handleChange} />
            <label className="label" htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" placeholder="Phone Number" className="input" id="phoneNumber" value={value.phoneNumber} onChange={handleChange} />
            <button className="button">Save</button>
        </form>
    )
}
