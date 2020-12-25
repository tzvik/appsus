import { KeepPreview } from "./KeepPreview.jsx";

export function KeepList({ keeps, onRemove }) {

    return (
        <section className="keeps-list">
            {keeps.map(keep => {
                return <KeepPreview key={keep.id} keep={keep} onRemove={onRemove} />;
            })}        </section>)
}
