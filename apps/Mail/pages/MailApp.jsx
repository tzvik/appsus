
import { mailService } from "../../Mail/services/mailService.js";
import { MailList } from "../cmps/MailList.jsx";
import { MailFilter } from "../cmps/MailFilter.jsx";
const { Link } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: {
            subject: ''
        }
    };

    componentDidMount() {
        this.loadmails();
    }

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
        mailService.remove(mailId).then(() => {
            this.loadmails()
        })
    }

    onReadStatus = (mailId) => {
        mailService.readStatus(mailId).then(() => {
            this.loadmails()
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy });
    }

    render() {
        const mailsForDisplay = this.getMailsForDisplay();
        return (
            <section className="mail-container">
                <section className="side-bar">
                    <button className="compose-btn">
                        <i className="fa fa-plus"></i>
                        <Link className="space-left new-mail" to="/mail/add">New Mail</Link>
                    </button>
                    <nav className="mail-nav">
                        <ul>
                            <li className="selected"><span className="fa fa-inbox"></span><i className="space-left">Inbox</i> </li>
                            <li><span className="fa fa-star"></span><i className="space-left">stared</i> </li>
                            <li><span className="fa fa-share-square"></span><i className="space-left">Sent Mail</i></li>
                            <li><img src="../../../assets/img/firstdraft.svg" className="draft"></img><i className="space-left">Drafts</i></li>
                        </ul>
                    </nav>
                </section>

                <div className="mobile-nav-icon">
                    <span className="fa fa-bars fa-lg"></span>
                </div>
                <section className="mail-app">
                    <section className="mails-header">
                        <span className="mails-header-subject">
                            <h1>SUBJECT</h1>
                            <MailFilter setFilter={this.onSetFilter} />
                        </span>
                        <span className="mails-header-sent-at"><h1>SENT DATE</h1></span>
                    
                    </section>
                    <MailList mails={mailsForDisplay} onReadStatus={this.onReadStatus} onRemove={this.onRemoveMail} />
                </section>
            </section>
        )
    }
}


