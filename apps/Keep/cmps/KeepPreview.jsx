import { NoteTxt } from "./NoteTxt.jsx";
import { NoteImg } from "./NoteImg.jsx";
// import { NoteTodos } from "./NoteTodos.jsx";
// import { NoteVideo } from "./NoteVideo.jsx";
import { DynamicKeepTypeCmp } from "./DynamicKeepTypeCmp.jsx";

export function KeepPreview({ keep, onRemove }) {

    return (
        <section  className="keeps-list">
            <DynamicKeepTypeCmp currType={keep.type}  keep={keep} onRemove={onRemove} />
            </section>

    )
}





