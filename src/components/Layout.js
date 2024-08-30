export default ({ children }) => {
    return (
        < main className="layout" >
            <nav className="menu">
                <a href="/new" className="button">New</a>
            </nav>
            <section>
                {children}
            </section>
        </main >
    )
}