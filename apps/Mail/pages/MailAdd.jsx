import { mailService } from "../services/mailService.js";

export class MailAdd extends React.Component {

    state = {
        mail: {
            subject: '',
            body: '',
            isRead: false,
            sentAt: 1551133930594
        }
    };

    onSaveMail = (ev) => {
        ev.preventDefault();

        mailService.save(this.state.mail)
            .then(savedMail => {
                console.log('Saves succesfully', savedMail);
                this.props.history.push('/mail');
            })
    };

    onInputChange = (ev) => {
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        const mail = { ...this.state.mail };
        mail[ev.target.name] = value;
        this.setState({
            mail
        });
    };

    render() {
        return (
            <form onSubmit={this.onSaveMail}>
                <input value={this.state.mail.subject}
                    placeholder="subject" type="text" name="subject"
                    onChange={this.onInputChange} />

                <input value={this.state.mail.body}
                    placeholder="subject" type="text" name="body"
                    onChange={this.onInputChange} />

                <button type="submit">add</button>

            </form>
        );
    }
}