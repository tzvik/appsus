import { MailDetails } from "./MailDetails.jsx"
// const { Link } = ReactRouterDOM;

export class MailPreview extends React.Component {

    state = {
        isExpand: false
    }

    showMore = () => {
        this.setState((prevState) => {
            return { isExpand: !prevState.isExpand }
        })
    }

    date = new Date(this.props.mail.sentAt).toLocaleDateString();
    render() {
        const { mail, onReadStatus, onRemove } = this.props
        return <li onClick={this.showMore}>
            <section className="mail-preview-container" >
                <div className={mail.isRead ? 'mail-preview read' : 'mail-preview'} onClick={() => {
                    onReadStatus(mail.id)
                }} >
                    <span className="preview-subject">{mail.subject}</span>
                    <span className="sent-at">{this.date}</span>
                </div>
                <section>
                    {
                        this.state.isExpand && <MailDetails mail={mail} onReadStatus={onReadStatus} onRemove={onRemove} />
                    }
                </section>
            </section>
        </li>
    }
}

