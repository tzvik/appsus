
const { Link } = ReactRouterDOM;

export class Home extends React.Component {

    state = {

    }



    componentDidMount() {

    }

    render() {
        return (
            <section className="welcome-splan">
                <h1>Pick your <span className="orange">wepon</span> </h1>
                
                <div className="services">
                    <Link className="fa fa-envelope" to={`/mail/`}>
                    </Link>

                    <Link className="fa fa-paperclip" to={`/keep/`}>
                 
                    </Link>

                </div>

            </section>
        )
    }
}