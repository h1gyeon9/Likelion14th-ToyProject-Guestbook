import { useState } from 'react';
import '../../styles/DetailGuestbook.css';
import Modal from '../common/Modal';
import Button from '../common/Button';

function DetailGuestbook({ guestbook, onClose, onDelete }){
    const [password, setPassword] = useState("");

    const handleDelete = () => {
        onDelete(guestbook.id, password);
    };

    return (
        <Modal onClose={onClose} className="detailGuestbook">
            <div className="detailGuestbookInfo">
                <h2>{guestbook.title}</h2>
                <p>{guestbook.writer}</p>
            </div>
            <p className="detailGuestbookContent">{guestbook.content}</p>
            <div className="deleteWrapper">
                <input className="passwordInput" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleDelete} className="delete">Delete</Button>
            </div>
        </Modal>
    )
}

export default DetailGuestbook;