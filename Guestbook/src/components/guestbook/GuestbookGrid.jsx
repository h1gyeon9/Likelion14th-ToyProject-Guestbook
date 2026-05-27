import Guestbook from "./Guestbook";
import '../../styles/GuestbookGrid.css';

function GuestbookGrid({ guestbooks }){
    return(
        <div className="guestbookGrid">
            {guestbooks.map((guestbook) => (
                <Guestbook key={guestbook.id} guestbook={guestbook} />
            ))}
        </div>
    );
}

export default GuestbookGrid;