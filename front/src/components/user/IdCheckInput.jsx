import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';


const IdCheckInput = ({ update }) => {

    const id = useRef('');
    const [idError, setError] = useState(false);
    const [idSuccess, setSuccess] = useState(false);
    const [idMsg, setMsg] = useState('');
    const idHandle = (e) => {id.current = e.target.value};

    const onclick = useCallback(async () => {
        if (!(2 <= id.current.length && id.current.length <= 20)) {
            setError(p => true);
            setMsg(e => "영어, 숫자로 2자리 이상 20자리 이하");
            return;
        }
        setError(e => false);
        setSuccess(e => true);
        setMsg(e => "server message")
        update({ id : id.current });
        // 서버에서 메시지를 보내줘야함
        // await axios.get("/idCheck")
        // .then(res => {
        //     setError(e => false);
        //     setSuccess(e => true);
        //     setMsg(e => "사용가능한 아이디입니다.")
        //     update({ id : id.current });
        // })
        // .catch(e => {
        //     setError(e => true);
        //     setSuccess(e => false);
        //     setMsg(it => e.name);
        //     update({ id : '' });
        // })
    }, [setError, setSuccess, setMsg]);
    return (
        <div className="flex w-full flex-col space-y-1">
            <label className="label">ID</label>

            <div className="join w-full">
                <input type="text" onChange={idHandle} minLength={2} maxLength = {20} className={`input join-item w-full ${idError ? 'input-error' : (idSuccess ? 'input-success' : '')}`} placeholder="ID" />
                <button className="btn btn-neutral join-item w-[89.6px]" onClick = {onclick}>확인</button>
            </div>

            {(idError || idSuccess) && <p className={idError ? `text-error` : 'text-success'}>{idMsg}</p>}
        </div>
    );
};

export default React.memo(IdCheckInput);
