/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './Modal.css';

function Modal({ handleClose, children }) {
    return (
        <div className='modal bg-red-400'>
            <div className="modal_backdrop" onClick={handleClose}></div>
            <div className={`modal_dialog modal_dialog_centered modal_dialog_scrollable`}>
                <div className="modal_conten bg-red-400">
                   
                    <div className="modal_body">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal