const { Link } = ReactRouterDOM;

export function NoteMenue ({keep, onRemove }) {
    
    return (
        <section>
         <div className="keep-note-menue">
           
            <i title="Change note color" className="fa fa-paint-brush info colors dropdown"></i>
            <i title="Clone note" className="fa fa-clone info"></i>
            <i title="Pin note" className="fa fa-paperclip "></i>
            <i title="Edit note" className="fa fa-edit" ></i>
            <i title="Delete note" className="fa fa-trash danger"
                onClick={() => { onRemove(keep.id) }}>    </i>
        </div>
    
        </section>

    )
}


