
import { keepService } from "../../Keep/services/keepServices.js";
import { KeepList } from "../cmps/keepList.jsx"


export class KeepApp extends React.Component {
        state = {
        keeps: [],
        filterBy: {
            title: '',
        },
    };

    componentDidMount() {
        this.loadKeeps();
    }


    loadKeeps = () => {
        keepService.query().then(keeps => {
            this.setState({ keeps });
            // console.log('keeps', keeps)
        });
    }


    onSetFilter = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ filterBy });
    }
    get keepsForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.name, 'i');
        return this.state.keeps.filter(keep => filterRegex.test(keep.info.title));
    }

    render() {
        const keepsForDisplay = this.keepsForDisplay;

        return (
            <section className="keep-app">
                {/* <KeepFilter setFilter={this.onSetFilter} /> */}
                {/* <Link className="btn" to="/keep/edit">Add keep</Link> */}
                <h2>My Keeps</h2>
                <KeepList keeps={keepsForDisplay} />
            </section>
        )
    }
}



