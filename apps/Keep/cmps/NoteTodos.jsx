const { Link } = ReactRouterDOM;
import { NoteMenue } from "./NoteMenue.jsx";

export function NoteTodos ({keep, onRemove }) {
    console.log('keep',keep)
    return (
        <section className="keep-note keep-todo">
                    <Link to={`/keep/${keep.id}`}>

            <i title="List note" className="note-type fa fa-list visible"></i>
       <ul>
       {keep.info.todos.map(todo => {
           return  <li key={todo.id}>{todo.txt}</li>
        })} 
     
        
       </ul>
       </Link>
           
        <NoteMenue  keep={keep} onRemove={onRemove} />

         </section>
    

    )
}


