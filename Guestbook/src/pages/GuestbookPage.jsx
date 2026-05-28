import { useEffect, useState } from 'react';
import { getGuestbooks, postGuestbook, deleteGuestbook } from '../api/guestbookAPI';
import GuestbookGrid from '../components/guestbook/GuestbookGrid';
import Button from '../components/common/Button';
import '../styles/GuestbookPage.css';
import DetailGuestbook from '../components/guestbook/DetailGuestbook';
import LeaveMessage from '../components/guestbook/LeaveMessage';

function GuestbookPage(){
    // 방명록 목록
    const [guestbooks, setGuestbooks] = useState([]);

    // 선택한 단일 방명록
    const [selectedGuestbook, setSelectedGuestbook] = useState(null);

    // 방명록 남기기 버튼 선택 여부
    const [leaveGuestbookOpened, setLeaveGuestbookOpened] = useState(false);

    // 목록 조회
    const loadGuestbooks = async () => {
        const res = await getGuestbooks();
        setGuestbooks(res.data);
    };

    // 처음 렌더 시 방명록 목록 불러오기
    useEffect(() => {
        loadGuestbooks();
    }, []);

    // 단일 방명록 선택
    const handleOpenDetail = (guestbook) => {
        setSelectedGuestbook(guestbook);
    };

    // 단일 방명록 선택 취소
    const handleCloseDetail = () => {
        setSelectedGuestbook(null);
    }

    // 방명록 남기기 버튼 클릭
    const handleOpenLeaveGuestbook = () => {
        setLeaveGuestbookOpened(true);
    }

    // 방명록 남기기 버튼 클릭 X
    const handleCloseLeaveGuestbook = () => {
        setLeaveGuestbookOpened(false);
    }

    // 방명록 작성
    const handlePostGuestbook = async(formData) => {
        try{
            await postGuestbook(formData);
            await loadGuestbooks();

            handleCloseLeaveGuestbook();
        }
        catch(err){
            alert(err.message);
        }
    }

    // 방명록 삭제
    const handleDeleteGuestbook = async(guestbook_id, password) => {
        try{
            await deleteGuestbook({guestbook_id, password});
            await loadGuestbooks();

            handleCloseDetail();
        }
        catch(err){
            alert(err.message);
        }
    }


    return (
        <main>
            <h1 className="title">Guestbook</h1>
            <Button onClick={handleOpenLeaveGuestbook} className="leaveAMessage">Leave a Message</Button>

            <GuestbookGrid guestbooks={guestbooks} onReadMore={handleOpenDetail}/>
            {selectedGuestbook && (<DetailGuestbook guestbook={selectedGuestbook} onClose={handleCloseDetail} onDelete={handleDeleteGuestbook} />)}
            {leaveGuestbookOpened && (<LeaveMessage onClose={handleCloseLeaveGuestbook} onSubmit={handlePostGuestbook}/>)}
        </main>
    );
}

export default GuestbookPage;