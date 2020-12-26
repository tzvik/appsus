
export class MailDetails extends React.Component {

    render() {
        const { mail, onRemove } = this.props;
        return (
            <section className="mail-details">
                <div className="mail-details-header">
                    <div className="mail-details-subject">{mail.subject}</div>
                    <h2>Suki Ben Harosh</h2>
                    <p>shuki@gmail.com</p>
                </div>
                <div className="mail-details-content"> {mail.body}</div>
                <div className="mail-details-control">
                    <button className="btn-delete" onClick={() => {
                        onRemove(mail.id)
                    }}
                    ><i className="fa fa-trash"></i></button>
                    <button className="btn-expand">
                        <i className="fa fa-expand"></i>
                    </button>
                </div>
            </section>
        )
    }
}
