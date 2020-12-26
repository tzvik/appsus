const { Link } = ReactRouterDOM;
import { NoteMenue } from "./NoteMenue.jsx";

export function NoteImg({ keep, onRemove }) {

    return (
        <section className="keep-note keep-img">
            <i title="Image note" className="note-type fa fa-image visible"></i>
            <Link to={`/keep/${keep.id}`}>
                <img src={keep.info.url}
                    alt="" />
      </Link>
                <NoteMenue keep={keep} onRemove={onRemove} />
      
        </section>

    )
}


