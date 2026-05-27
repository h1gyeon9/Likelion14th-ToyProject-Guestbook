import Guestbook from "./Guestbook";
import '../../styles/GuestbookGrid.css';

function GuestbookGrid({ guestbooks, onReadMore }){
    return(
        <div className="guestbookGrid">
            {guestbooks.map((guestbook) => (
                <Guestbook key={guestbook.id} guestbook={guestbook} onReadMore={onReadMore} />
            ))}
        </div>
    );
}

export default GuestbookGrid;