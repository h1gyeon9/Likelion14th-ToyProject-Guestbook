import '../../styles/Modal.css';

function Modal({ children, onClose, className }){
    return(
        <div className="overlay" onClick={onClose}>
            <div className={`${className} modalBox`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;