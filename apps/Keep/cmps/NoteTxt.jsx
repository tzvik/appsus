const { Link } = ReactRouterDOM;
import { NoteMenue } from "./NoteMenue.jsx";
export function NoteTxt ({keep, onRemove }) {
    
    return (
        <section className="keep-note">
             <i title="Text note" className="note-type fa fa-font visible"></i>

        <Link to={`/keep/${keep.id}`}>
        <div className="note-content">
                {keep.info.txt}
            <p contentEditable="true">
            </p>

            <ul className="note-labels">
                <li> {keep.type}</li>
            </ul>
        </div>
        </Link>
        <NoteMenue  keep={keep} onRemove={onRemove} />
         
    
        </section>

    )
}


