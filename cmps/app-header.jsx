const { NavLink, withRouter } = ReactRouterDOM;


export function AppHeader(props) {

   

    return <nav>
        <ul>
            <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/mail">mail</NavLink></li>
            <li><NavLink to="/keep">keep</NavLink></li>
        </ul>
        <h1>My App</h1>
    </nav>;
}


