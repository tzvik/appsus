import {mailService} from "../services/mailService.js"
const { Link } = ReactRouterDOM;

export class MailDetails extends React.Component {
    state = {
        mail: null
    };

    componentDidMount() {
        console.log('MOUNT', this.props);
        this.loadMail();
    }

    
    loadMail() {
        console.log('this.props',this.props);
        // const { mailId } = this.props.match.params;
        // petService.getById(petId).then(pet => {
        //     this.setState({ pet });
        // });
    }

    render() {
        return (
            <div>
                                <h1>MailDetails</h1>

            </div>
        )
    }
}
