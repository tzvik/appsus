// import { PetPreview } from "./PetPreview.jsx";

import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onRemove }) {

    return (
        <ul className="mail-list">
            {mails.map(mail => {
                return <MailPreview key={mail.id} mail={mail}
                    onRemove={onRemove} />;
            })
            }
        </ul>
    );
}


