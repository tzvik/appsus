const { NavLink, withRouter } = ReactRouterDOM;


export function AppHeader(props) {



    return <section className="app-header">
        <h1>🚴‍♀️ Gil & Tzvika</h1>
        {/* <i class="fa fa-envelope" aria-hidden="true"></i> */}
        <section className="search">
            <button className="search fa fa-search"></button>
            <input type="search" placeholder="search notes" />
            <select id="selection" className="search-filter">
                <option value="" >All</option>
                <option value="NoteText">Text</option>
                <option value="NoteImg">Image</option>
                <option value="NoteTodos">List</option>
            </select>
        </section>
        <nav>
            <li><NavLink to="/mail"> <span className="fa fa-envelope "></span> mail </NavLink></li>
            <li><NavLink to="/keep"><span className="fa fa-paperclip "></span> keep</NavLink></li>
            {/* <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink exact to="/">Home</NavLink></li> */}
            <span className="fa fa-th fa-lg"></span>
        </nav>
    </section>;
}


