import Button from "../common/Button";
import '../../styles/Guestbook.css';

function Guestbook({ guestbook, onReadMore }) {
    return(
        <div className="guestbook">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
            <path d="M28.1667 4.16667C28.1667 2.7 26.9667 1.5 25.5 1.5H4.16667C2.7 1.5 1.5 2.7 1.5 4.16667M28.1667 4.16667V20.1667C28.1667 21.6333 26.9667 22.8333 25.5 22.8333H4.16667C2.7 22.8333 1.5 21.6333 1.5 20.1667V4.16667M28.1667 4.16667L14.8333 13.5L1.5 4.16667" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="guestbookInfo">
                <h2 className="guestbookTitle">{guestbook.title}</h2>
                <p className="guestbookWriter">{guestbook.writer}</p>
                <Button className="readMore" onClick={() => onReadMore(guestbook)}>Read More</Button>
            </div>
        </div>
    );
}

export default Guestbook;