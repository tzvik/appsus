
export function KeepPreview({ keep }) {

    return <article className="keep-note">
     <li>
                        {keep.info.title}
                        <ul>
                            <li>Lable: {keep.info.label}</li>
                            <li>Type: {keep.type}</li>
                        </ul>
                    </li>

    </article>

}