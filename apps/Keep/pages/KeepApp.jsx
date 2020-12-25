
import { keepService } from "../services/keepService.js";
import { KeepList } from "../cmps/keepList.jsx"
import { KeepAdd } from "../cmps/KeepAdd.jsx"


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


    onRemovekeep = (keepId) => {
        keepService.remove(keepId).then(() => {
            this.loadKeeps()
        })
    }


    onSaveKeep = (keep) => {
        keepService.save(keep)
            .then(savedKeep => {
                console.log('Saves succesfully', savedKeep);
                this.loadKeeps()
                // this.setState({keeps: [savedKeep, ...this.state.keeps]})
                // this.props.history.push('/keep');
            })

    };


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
        console.log('keeps', this.state.keeps)

        return (
            <section className="keep-app">
                {/* <KeepFilter setFilter={this.onSetFilter} /> */}
                {/* <Link className="btn" to="/keep/edit">Add keep</Link> */}
                <h2>My Keeps</h2>
                <KeepAdd onSaveKeep={this.onSaveKeep}/>
                <h3>Pinned Notes</h3>
                <section className="pinned-keeps"></section>
                <h3>Other Notes</h3>
                <KeepList keeps={keepsForDisplay} onRemove={this.onRemovekeep} />
            </section>
        )
    }
}



