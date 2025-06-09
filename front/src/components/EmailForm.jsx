import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';
const EmailForm = ({ update }) => {
    const email = useRef(undefined);
    const key = useRef('');
    const [eError, setEmailError] = useState(false);
    const [eSuccess, setEmailSuccess] = useState(false);
    const [eMsg, setEmailMsg] = useState('');

    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);
    const [codeSuccess, setCodeSuccess] = useState(false);
    const [codeMsg, setCodeMsg] = useState('');

    const TIME = 3;
    const [count, setCount] = useState(0);
    let interval = undefined;

    const codeHandle = useCallback((e) => setCode((prev) => e.target.value),[setCode]);

    const countDown = useCallback(() => {
        if (interval) clearInterval(interval);
        setCount(TIME);
        interval = setInterval(() => {
            setCount((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    return 0;
                } else {
                    return prev - 1;
                }
            });
        }, 1000);
    }, [setCount]);

    // 코드전송
    const getCode = useCallback(async () => {
        if (!email.current.checkValidity()) {
            email.current.reportValidity();
            setEmailError(() => true);
            setEmailSuccess(() => false);
            setEmailMsg('');
            setCount(0);
            setCode('');
            setCodeSuccess(false);
            if (interval) clearInterval(interval);
            return;
        }
        key.current = '12345';
        setEmailSuccess(true);
        setEmailError(false);
        setEmailMsg('이메일로 전송된 인증 코드를 입력해주세요.');
        countDown();

        // const response = await axios
        //     .get('/getCode')
        //     .then((res) => ({ ok: true, res }))
        //     .catch((e) => ({ ok: false, err: e }));

        // if (response.ok && response.res.status <= 201) {
        //     console.log('성공!', response.res.data);
        //     key.current = response.res.data;
        //     setEmailSuccess(true);
        //     setEmailError(false);
        //     setEmailMsg("이메일로 전송된 인증 코드를 입력해주세요.");
        // } else {
        //     const errorStatus = response.err?.response?.status || 'unknown';
        //     const errorMsg = response.err?.response?.statusText || response.err?.message || '알 수 없는 오류';

        //     setEmailSuccess(false);
        //     setEmailError(true);
        //     setEmailMsg('Error ' + errorStatus + ' : ' + errorMsg);
        // }
    }, [setEmailError, setEmailSuccess, setEmailMsg, setCode, setCodeError, setCodeSuccess, setCodeMsg, setCount, codeSuccess]);
    // 코드전송

    
    // 인증버튼
    const auth = useCallback(() => {
        if (!(eSuccess && !eError)) return;
        if (code === key.current && count > 0) {
            setCodeError(false);
            setCodeSuccess(true);
            setCodeMsg('인증이 완료되었습니다.');
            if (interval) clearInterval(interval);
            update({ email: email.current.value });
        } else if (count <= 0) {
            setCodeError(true);
            setCodeMsg('만료되었습니다.');
            update({ email: '' });
        } else {
            setCodeError(true);
            setCodeMsg('인증번호가 일치하지 않습니다.');
            update({ email: '' });
        }
    },[setCode, setCodeError, setCodeSuccess, setCodeMsg, update, code, count]);
    return (
        <div className="flex w-full flex-col space-y-1">
            <label className="label">Email</label>
            <div className="join w-full">
                <input type="email" ref={email} disabled={codeSuccess} required placeholder="Email" className={`input join-item w-full ${eError ? 'input-error' : eSuccess ? 'input-success' : ''}`} />
                {
                    !codeSuccess && 
                    <button type="button" onClick={getCode} className="btn btn-neutral join-item">
                        코드전송
                    </button>
                }
            </div>
            {(eError || eSuccess) && <p className={eError ? 'text-error' : 'text-success'}>{eMsg}</p>}

            <label className="label">Code</label>
            <div className="join w-full">
                <input type="text" placeholder="Code" disabled={!eSuccess || codeSuccess} value={code} onChange={codeHandle} className={`input join-item w-full ${codeError ? 'input-error' : codeSuccess ? 'input-success' : ''}`} />
                {
                    !codeSuccess && 
                    <button type="button" onClick={auth} className="btn btn-neutral join-item w-[89.6px]">
                        인증
                    </button>
                }
            </div>

            {/* countdown, message */}
            <div className="mt-1 flex items-center gap-2">
                {!codeSuccess && (
                    <span className="countdown font-mono text-base">
                        <span style={{ '--value': parseInt(count / 60) }} aria-live="polite"></span>:<span style={{ '--value': count % 60 }} aria-live="polite"></span>
                    </span>
                )}
                {(codeError || codeSuccess) && <span className={`${codeError ? 'text-error' : 'text-success'}`}>{codeMsg}</span>}
            </div>
        </div>
    );
};

export default React.memo(EmailForm);
