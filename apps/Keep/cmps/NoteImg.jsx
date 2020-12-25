const { Link } = ReactRouterDOM;
import { NoteMenue } from "./NoteMenue.jsx";

export function NoteImg({ keep, onRemove }) {

    return (
        <section className="keep-note">
            <i title="Image note" className="note-type fa fa-image visible"></i>
            <Link to={`/keep/${keep.id}`}>
                <img src={  }
                    alt="" />

                <NoteMenue keep={keep} onRemove={onRemove} />
            </Link>
        </section>

    )
}


