const { Link } = ReactRouterDOM;
import { NoteMenue } from "./NoteMenue.jsx";

export function NoteTodos ({keep, onRemove }) {
    
    return (
        <section className="keep-note">
            <i title="List note" className="note-type fa fa-list visible"></i>
            <Link to={`/keep/${keep.id}`}>
       <ul>
        <li>{keep.info.txt}</li>
        <li>{keep.info.txt}</li>
        <li>{keep.info.txt}</li>
        
       </ul>
       </Link>
           
        <NoteMenue  keep={keep} onRemove={onRemove} />

         </section>
    

    )
}


