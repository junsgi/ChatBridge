import React, { useCallback, useEffect, useReducer } from 'react';

const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{2,20}$/;
const reducer = (state, action) => {
    const copy = {...state};

    switch (action.type) {
        case "pwHandle":
            copy.pw = action.value
            if (copy.ck.length !== 0) {
                copy.ck = '';
                copy.ckError = false;
                copy.ckSuccess = false;
                copy.ckMsg = '';
            }

            if (regex.test(copy.pw)) {
                copy.pwError = false;
                copy.pwSuccess = true;
                copy.pwMsg = '사용가능한 비밀번호입니다.';
            }else {
                copy.pwError = true;
                copy.pwSuccess = false;
                copy.pwMsg = '숫자-영어 2자리 이상 20자리 이하';
            }
            return copy;
            
        case "ckHandle":
            copy.ck = action.value;
            if (!regex.test(copy.pw) || copy.pw !== copy.ck) {
                copy.ckError = true;
                copy.ckSuccess = false;
                copy.ckMsg = '비밀번호가 일치하지 않습니다.'
            }else {
                copy.ckError = false;
                copy.ckSuccess = true;
                copy.ckMsg = '비밀번호가 일치합니다.'
            }
            return copy;
        default:
            return state;
    }
};
const CreateUpdatePw = ({ update }) => {
    const [pw, dispatch] = useReducer(reducer, {
        pw: '', ck: '',
        pwError: false, pwSuccess : false, ckError: false, ckSuccess : false, // 에러 컨트롤
        pwMsg: '', ckMsg: '', // 에러 메시지
    });
    const pwHandle = useCallback((e) => dispatch({ type: 'pwHandle', value: e.target.value }), [dispatch]);
    const ckHandle = useCallback((e) => dispatch({ type: 'ckHandle', value: e.target.value }), [dispatch]);
    useEffect(() => {
        if (pw.ckSuccess) {
            update({ pw : pw.pw})
        }
    }, [pw.ckSuccess])
    return (
        <div className="flex w-full flex-col space-y-1">
            <label className="label">Pw</label>
            <input type="password" placeholder="Password" onChange={pwHandle} className={`input ${pw.pwError ? 'input-error' : (pw.pwSuccess ? 'input-success' : '')}`} />
            {(pw.pwError || pw.pwSuccess) && <p className={pw.pwError ? "text-error" : "text-success"}>{pw.pwMsg}</p>}

            <label className="label">confirm</label>
            <input type="password" placeholder="Confirm Password" onChange={ckHandle} value = {pw.ck} className={`input ${pw.ckError ? 'input-error' : (pw.ckSuccess ? 'input-success' : '')}`} />
            {(pw.ckError || pw.ckSuccess) && <p className={pw.ckError ? "text-error" : "text-success"}>{pw.ckMsg}</p>}
        </div>
    );
};

export default React.memo(CreateUpdatePw);
