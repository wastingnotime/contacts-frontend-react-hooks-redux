import React from 'react'
import { A } from 'hookrouter'

export default ({ children }) => {
    return (
        < main className="layout" >
            <nav className="menu">
                <A href="/new" className="button">New</A>
            </nav>
            <section>
                {children}
            </section>
        </main >
    )
}