const { Link } = ReactRouterDOM;

export function MailPreview({ mail, onRemove }) {

    var date = new Date(mail.sentAt).toLocaleDateString();
    return <article className="mail-preview">
        <h1>mail preview {mail.subject}</h1> <span> {mail.body}</span> <span>{date}</span>
        <Link to={`/mail/${mail.id}`}>
            <h1>{mail.subject}</h1>
       
        </Link>

        <div>
            <Link className="mail-edit-link" to={`/mail/${mail.id}`}>Edit mail</Link>
            <button onClick={() => {
                onRemove(mail.id)
            }}
            ><span className="fa fa-trash"></span></button>

        </div>

    </article>

}
