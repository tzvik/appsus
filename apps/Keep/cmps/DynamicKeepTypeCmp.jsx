import { NoteTxt } from "./NoteTxt.jsx";
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodos } from "./NoteTodos.jsx";
import { NoteVideo } from "./NoteVideo.jsx";

export function DynamicKeepTypeCmp ({ currType, keep,onRemove }) {
    switch (currType) {
        case 'NoteText':
            return <NoteTxt keep={keep} onRemove={onRemove} />
      
        case 'NoteImg':
            return  <NoteImg keep={keep} onRemove={onRemove} />
        case 'NoteTodos':
            return  <NoteTodos keep={keep} onRemove={onRemove} />
        case 'NoteVideo':
            return  <NoteVideo keep={keep} onRemove={onRemove} />
    }
    return <p>UNKNWON</p>
}
