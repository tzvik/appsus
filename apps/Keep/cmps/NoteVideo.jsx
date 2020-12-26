const { Link } = ReactRouterDOM;
import { NoteMenue } from "./NoteMenue.jsx";

export function NoteVideo ({keep, onRemove }) {
    
    return (
        <section className="keep-note keep-video">
       <Link to={`/keep/${keep.id}`}>
                      <img src={keep.info.url}
                alt="" />
</Link>
        <NoteMenue  keep={keep} onRemove={onRemove} />

         </section>
    

    )
}


