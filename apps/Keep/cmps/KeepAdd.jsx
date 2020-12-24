

export class KeepAdd extends React.Component {

    state = {
        keep: {
            type: "NoteText",
            info: {
                txt: "Fullstack Me Baby!",
            }
        }
    }

  

    onInputChange = (ev) => {
        const value = ev.target.value;
        const keep = { ...this.state.keep };
        keep.info[ev.target.name] = value;
        this.setState({ keep },()=>{console.log('state',this.state)});
    };
  

onSaveKeep= (ev) => {
    ev.preventDefault();
    this.props.onSaveKeep(this.state.keep)

}

    render() {
        return (
            <form className="create-keep" onSubmit={this.onSaveKeep}>
                <input
                    name="txt"
                    value={this.state.keep.text}
                    onChange={this.onInputChange}
                    type="text"
                    placeholder="what's on your mind..." />
                <div className="keep-type-icons">
                    <i title="Text note" className="fa fa-font visible"></i>
                    <i title="Image note" className="fa fa-image visible"></i>
                    <i title="List note" className="fa fa-list visible"></i>
                    <button type="submit">add</button>

                </div>
            </form>
        )
    }
}


