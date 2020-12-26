const { Link } = ReactRouterDOM;
import { NoteMenue } from "./NoteMenue.jsx";
export function NoteTxt({ keep, onRemove }) {

    return (
        <section className="keep-note keep-txt">
            <i title="Text note" className="note-type fa fa-font visible"></i>

            <Link to={`/keep/${keep.id}`}>
                <div className="note-content">
                    {keep.info.txt}
                    <p contentEditable="true">
                    </p>

                </div>
            </Link>
            <NoteMenue keep={keep} onRemove={onRemove} />


        </section>

    )
}


