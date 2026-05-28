import { useState } from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";
import '../../styles/LeaveMessage.css';

function LeaveMessage({ onClose, onSubmit }){
    const [formData, setFormData] = useState({
        title: "",
        writer: "",
        content: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <Modal onClose={onClose} className="leaveMessage">
            <form onSubmit={handleSubmit} className="formWrapper">
                <div className="inputWrapper">
                    <label htmlFor="writer">Name</label>
                    <input id="writer" name="writer" value={formData.writer} onChange={handleChange} />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" value={formData.password} onChange={handleChange} type="password" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="content">Message</label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleChange} />
                </div>
                <Button className="formSubmit">Submit</Button>
            </form>
        </Modal>
    )
}

export default LeaveMessage;