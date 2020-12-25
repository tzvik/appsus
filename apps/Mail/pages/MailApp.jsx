
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
                <h1>Liel's Changes</h1>
                <section className="side-bar">
                    <button className="compose-btn">
                        <i className="fa fa-plus"></i>
                        <Link className="new-mail" to="/mail/add">New Mail</Link>
                    </button>
                    <nav className="mail-nav">
                        <ul>
                            <li className="selected"><span className="fa fa-inbox"></span><i className="space-left">Inbox</i> </li>
                            <li><span className="fa fa-star"></span><i className="space-left">stared</i> </li>
                            <li><span className="fa fa-share-square"></span><i className="space-left">Sent Mail</i></li>
                            <li><img src="../../../assets/img/firstdraft.svg" className="draft"></img><i className="space-left">Drafts</i></li>
                            {/* <img src="../../../assets/img/firstdraft.svg" ></img> */}
                        </ul>
                    </nav>
                </section>

                <section className="mail-app">
                    <h1>Mail App</h1>
                    {/* <PetFilter setFilter={this.onSetFilter} /> */}
                    <MailList mails={mailsForDisplay} onRemove={this.onRemoveMail} />
                </section>
            </section>

        )
    }
}


