import React, { useRef } from 'react';
const EmailForm = ({ eHandle, eError, eMsg, codeHandle, codeError, codeMgs }) => {
    const inputRef = useRef();

    const onclick = () => {
        if (inputRef.current.checkValidity()) {
            // 유효성 통과
            console.log('Valid:', inputRef.current.value);
        } else {
            // 유효성 실패 → 브라우저 기본 경고 메시지 표시
            inputRef.current.reportValidity();
        }
    };
    return (
        <div className="flex w-full flex-col space-y-1">
            <label className="label">Email</label>
            <div className="join w-full">
                <input type="email" name="email" required placeholder="Email" className={`input join-item w-full ${eError ? 'input-error' : ''}`} onChange={eHandle} />
                <button type="submit" className="btn btn-neutral join-item">
                    코드전송
                </button>
            </div>
            {eError && <p className="text-error">{eMsg}</p>}


            <label className="label">Code</label>
            <div className="w-full">
                <input type="text" placeholder="Code" disabled={!(eError && codeError)} onChange={codeHandle} className={`input join-item w-full ${eError ? 'input-error' : ''}`} />
            </div>
            {codeError && <p className="text-error">{codeMgs}</p>}
        </div>
    );
};

export default React.memo(EmailForm);
