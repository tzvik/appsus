
import { mailService } from "../../Mail/services/mailService.js";
import { MailList } from "../cmps/MailList.jsx";

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
            // console.log('mails',mails);
        });
    }

    getMailsForDisplay() {
        // const { filterBy } = this.state;
        // const filterRegex = new RegExp(filterBy.name, 'i');
        // return this.state.pets.filter(pet => filterRegex.test(pet.name));

        return this.state.mails;
    }





    render() {
        const mailsForDisplay = this.getMailsForDisplay();
        return (
            <section className="mail-app">
                <h1>MailApp</h1>
                {/* <ul>
                    <li> {mails.map(mail => {
                        return <article key={mail.id}>
                            <h1>key={mail.id} </h1>
                            <h2></h2>
                        </article>;
                    })
                    }</li>
                </ul> */}
                <MailList mails={mailsForDisplay} />
            </section>
        )
    }
}


// render() {
//     // const petsForDisplay = this.getPetsForDisplay()
//     const petsForDisplay = this.petsForDisplay;
//     return (
//         <section className="pet-app">
//             <PetFilter setFilter={this.onSetFilter} />
//             <Link className="btn" to="/pet/edit">Add Pet</Link>
//             <h2>My Pets</h2>
//             <PetList pets={petsForDisplay} onRemove={this.onRemovePet} />
//         </section>
//     );
// }