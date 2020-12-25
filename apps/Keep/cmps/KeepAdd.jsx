

export class KeepAdd extends React.Component {

    state = {
        keep: {
              inpt: "Fullstack Me Baby!",
              curType: "NoteText",
            }
        }
    
    onInputChange = (ev) => {
        const value = ev.target.value;
        const keep = { ...this.state.keep };
        keep[ev.target.name] = value;
        this.setState({ keep });
    };

    onSaveKeep = (ev) => {
        ev.preventDefault();
        this.props.onSaveKeep(this.state.keep)

    }

    // onSetTypeText = () => {
    //     const keep = { ...this.state.keep };
    //     keep.curType = 'NoteText'
    //     this.setState({keep})
    //     console.log('type',this.state.keep.curType)
    // }

    onSetType = (ev,type) => {
    const keep = { ...this.state.keep };
    keep.curType = type
    this.setState({ keep })
    console.log('typeSent', keep.curType)
    console.log('typeState', this.state.keep.curType)
}

onSetTypeImg = () => {
    const keep = { ...this.state.keep };
    keep.curType = 'NoteImg'
    this.setState({ keep })
    // console.log('type', this.state.keep.curType)
}

onSetList = () => {
    const keep = { ...this.state.keep };
    keep.curType = 'NoteTodos'
    this.setState({ keep })
    // console.log('type', this.state.keep.curType)
}


render() {
    return (        

        <form className="create-keep" onSubmit={this.onSaveKeep}>
            <input
                name="inpt"
                value={this.state.keep.text}
                onChange={this.onInputChange}
                type="text"
                autoComplete="off"
                placeholder="what's on your mind..." />
            <div className="keep-type-icons">
                <i title="Text note" value="NoteText" className="fa fa-font visible" onClick={(e) => { this.onSetType(e, 'NoteText') }}></i>
                <i title="Image note" className="fa fa-image visible" onClick={this.onSetTypeImg}></i>
                <i title="List note" className="fa fa-list visible" onClick={this.onSetList} ></i>
                <button type="submit" hidden>add</button>

            </div>
        </form>
    )
}
}



