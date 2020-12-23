const { NavLink, withRouter } = ReactRouterDOM;


export function AppHeader(props) {

   

    return <nav className="app-header">
        <h1>🚴‍♀️ Gil & Tzvika</h1>
        <ul>
        {/* <i class="fa fa-envelope" aria-hidden="true"></i> */}

            <li><NavLink to="/mail">mail <span class="fa fa-inbox"></span></NavLink></li>
            <li><NavLink to="/keep">keep</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink  exact to="/">Home</NavLink></li>
        </ul>
    </nav>;
}


