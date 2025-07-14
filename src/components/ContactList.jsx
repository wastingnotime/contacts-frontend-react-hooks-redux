import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../actions'

export default () => {
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    return (
        <div className="contact-list">
            {
                contacts.map(o => {
                    console.log(o)
                    return (
                        <div key={o.id}>
                            <a href={"/edit/" + o.id} className="contact-list-item">{o.firstName + " " + o.lastName}</a>
                            <button className="button" onClick={() => dispatch(deleteContact(o.id))}>X</button>
                        </div>
                    )
                })
            }
        </div>
    )
}