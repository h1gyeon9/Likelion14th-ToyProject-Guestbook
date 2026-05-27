let guestbooks = [
    {
        id: 1,
        writer: "첫번째사람",
        title: "첫번째제목",
        content: "첫번째내용",
        created: "2026-05-19T13:40:00+09:00",
        password: "1111"
    },
    {
        id: 2,
        writer: "두번째사람",
        title: "두번째제목",
        content: "두번째내용",
        created: "2026-05-19T13:50:00+09:00",
        password: "2222"
    },
    {
        id: 3,
        writer: "세번째사람",
        title: "세번째제목",
        content: "세번째내용",
        created: "2026-05-19T14:00:00+09:00",
        password: "3333"
    },
    {
        id: 4,
        writer: "네번째사람",
        title: "네번째제목",
        content: "네번째내용",
        created: "2026-05-19T14:10:00+09:00",
        password: "4444"
    },
    {
        id: 5,
        writer: "다섯번째사람",
        title: "다섯번째제목",
        content: "다섯번째내용",
        created: "2026-05-19T14:20:00+09:00",
        password: "5555"
    },
    {
        id: 6,
        writer: "여섯번째사람",
        title: "여섯번째제목",
        content: "여섯번째내용",
        created: "2026-05-19T14:30:00+09:00",
        password: "6666"
    },
    {
        id: 7,
        writer: "일곱번째사람",
        title: "일곱번째제목",
        content: "일곱번째내용",
        created: "2026-05-19T14:40:00+09:00",
        password: "7777"
    },
    {
        id: 8,
        writer: "여덟번째사람",
        title: "여덟번째제목",
        content: "여덟번째내용",
        created: "2026-05-19T14:50:00+09:00",
        password: "8888"
    },
    {
        id: 9,
        writer: "아홉번째사람",
        title: "아홉번째제목",
        content: "아홉번째내용",
        created: "2026-05-19T15:00:00+09:00",
        password: "9999"
    },
    {
        id: 10,
        writer: "열번째사람",
        title: "열번째제목",
        content: "열번째내용",
        created: "2026-05-19T15:10:00+09:00",
        password: "1010"
    },
    {
        id: 11,
        writer: "열한번째사람",
        title: "열한번째제목",
        content: "열한번째내용",
        created: "2026-05-19T15:20:00+09:00",
        password: "1111"
    },
    {
        id: 12,
        writer: "열두번째사람",
        title: "열두번째제목",
        content: "열두번째내용",
        created: "2026-05-19T15:30:00+09:00",
        password: "1212"
    }
];


// /guestbook GET
export const getGuestbooks = async () => {
    return {
        status: 200,
        message: "방명록 목록 조회 성공",
        data: guestbooks.map(({ password, ...guestbook }) => guestbook)
    };
};


// /guestbook/{guestbook_id} GET
export const getGuestbook = async (guestbook_id) => {
    const target = guestbooks.find(
        (item) => item.id === Number(guestbook_id)
    );

    if (!target) {
        throw{
            status: 404,
            message: "해당 방명록을 찾을 수 없습니다."
        }
    }

    const { password, ...guestbookData } = target;
    return {
        status: 200,
        message: "방명록 단일 조회 성공",
        data: guestbookData
    };
}


// /guestbook POST
export const postGuestbook = async ({title, writer, content, password}) => {
    if (!title || !writer || !content || !password) {
        throw {
            status: 400,
            message: "필수 입력값이 누락되었습니다."
        };
    }

    if (password.length < 4) {
        throw {
            status: 400,
            message: "비밀번호는 4자 이상이어야 합니다."
        };
    }

    const newGuestbook = {
        id: guestbooks.length + 1,
        title,
        writer,
        content,
        password,
        created: new Date().toISOString()
    };

    guestbooks = [newGuestbook, ...guestbooks];
    
    return {
        status: 201,
        message: "방명록 작성 성공",
        data: {
            id: newGuestbook.id,
            writer: newGuestbook.writer,
            title: newGuestbook.title,
            content: newGuestbook.content,
            created: newGuestbook.created
        }
    };
};


// /guestbook/{guestbook_id} DELETE
export const deleteGuestbook = async ({guestbook_id, password}) => {
    const target = guestbooks.find((item) => item.id === Number(guestbook_id));

    if (!target) {
        throw {
            status: 404,
            message: "존재하지 않는 방명록입니다."
        };
    }

    if (target.password !== password) {
        throw {
            status: 400,
            message: "비밀번호가 일치하지 않습니다."
        }
    }

    guestbooks = guestbooks.filter((item) => item.id !== Number(guestbook_id));

    return {
        status: 200,
        message: "방명록 삭제 성공"
    }
}