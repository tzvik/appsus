
export function KeepPreview({ keep }) {

    return <article className="keep-note">
     <li>
                        {keep.info.title}
                        <ul>
                            <li>Lable: {keep.info.label}</li>
                            <li>Type: {keep.type}</li>
                        </ul>
                    </li>
                    <div className="keep-note-menue">
                    <i title="Text note" className="fa fa-font visible"></i>
                    <i title="Image note" className="fa fa-image visible"></i>
                    <i title="List note" className="fa fa-list visible"></i>
                    <i title="Edit note" className="fa fa-edit"></i>
                    <i title="Pin note" className="fa fa-paperclip "></i>
                    <i title="Mark note" className="fa fa-check marked"></i>
                    <i title="Change note color" className="fa fa-paint-brush info colors dropdown"></i>
                    <i title="Edit note" className="fa fa-edit"></i>
                    <i title="Clone note" className="fa fa-clone info"></i>
                    <i title="Delete note" className="fa fa-trash-alt danger"></i>
                    </div>

    </article>

}