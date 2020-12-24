
import { mailService } from "../../Mail/services/mailService.js";
import { MailList } from "../cmps/MailList.jsx";
const { Link } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: {
            subject: ''
        },
    };

    componentDidMount() {
        this.loadmails();
    }

    // componentWillUnmount() {
    // }


    loadmails = () => {
        mailService.query().then(mails => {
            this.setState({ mails });
        });
    }

    getMailsForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.subject, 'i');
        return this.state.mails.filter(mail => filterRegex.test(mail.subject));
    }

    onRemoveMail = (mailId) => {
        console.log(mailId);
        mailService.remove(mailId).then(() => {
            this.loadmails()
        })

    }



    render() {
        const mailsForDisplay = this.getMailsForDisplay();
        return (
            <section className="mail-container">
                <section className="side-bar">
                    <nav className="mail-nav">
                        <ul>
                            <li><span className="fa fa-inbox"></span>compose</li>
                            <li><span className="fa fa-star"></span>stared</li>
                            <li>compose</li>
                            <li>compose</li>
                            <li>compose</li>



                        </ul>



                    </nav>



                </section>

                <section className="mail-app">
                    <h1>MailApp</h1>
                    {/* <PetFilter setFilter={this.onSetFilter} /> */}
                    <Link className="btn" to="/mail/add">New Mail</Link>
                    <MailList mails={mailsForDisplay} onRemove={this.onRemoveMail} />
                </section>
            </section>

        )
    }
}


