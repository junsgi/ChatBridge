import React, { useEffect, useRef, useState } from 'react';
import RequestChat from '../components/contents/RequestChat';
import ResponseChat from '../components/contents/ResponseChat';

const WriteChat = () => {
    const bottomRef = useRef(null);

    // ✅ list를 상태로 관리
    const [list, setList] = useState(Array(10).fill(1).map((_, idx) => (idx % 2 === 0 ? <RequestChat key={idx} /> : <ResponseChat key={idx} />)));

    // ✅ 새 메시지 수신 시 아래로 자동 스크롤
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [list]);

    return (
        <div className="absolute inset-0 overflow-y-auto p-4">
            {list}
            <div ref={bottomRef} />
        </div>
    );
};

export default React.memo(WriteChat);
