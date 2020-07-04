import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../actions'
import { A } from 'hookrouter'

export default () => {
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    return (
        <div className="contact-list">
            {
                contacts.map(o => {
                    return (
                        <div key={o.id}>
                            <A href={"/edit/" + o.id} className="contact-list-item">{o.firstName + " " + o.lastName}</A>
                            <button className="button" onClick={() => dispatch(deleteContact(o.id))}>X</button>
                        </div>
                    )
                })
            }
        </div>
    )
}