import React, { useCallback, useRef, useState } from 'react';
const EmailForm = ({ update }) => {
    const email = useRef('');
    const [eError, setEmailError] = useState(false);
    const [eSuccess, setEmailSuccess] = useState(false);
    const [eMsg, setEmailMsg] = useState('');

    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);
    const [codeSuccess, setCodeSuccess] = useState(false);
    const [codeMsg, setCodeMsg] = useState('');

    const emailHandle = e => {email.current = e.target.value};
    const codeHandle = useCallback(e => {
        setCode(prev => e.target.value);
    }, [setCode]);

    const onclick = () => {
        if (!email.current.checkValidity()) {
            email.current.reportValidity();
            return;
        }
    };
    return (
        <div className="flex w-full flex-col space-y-1">
            <label className="label">Email</label>
            <div className="join w-full">
                <input type="email" name="email" required placeholder="Email" className={`input join-item w-full ${eError ? 'input-error' : (eSuccess ? 'input-success' : '')}`} onChange={emailHandle} />
                <button type="submit" className="btn btn-neutral join-item">
                    코드전송
                </button>
            </div>
            {eError && <p className="text-error">{eMsg}</p>}


            <label className="label">Code</label>
            <div className="w-full">
                <input type="text" placeholder="Code" disabled={!(eError && codeError)} onChange={codeHandle} className={`input join-item w-full ${eError ? 'input-error' : ''}`} />
            </div>
            {codeError && <p className="text-error">{codeMsg}</p>}
        </div>
    );
};

export default React.memo(EmailForm);
