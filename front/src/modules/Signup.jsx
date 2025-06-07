import { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CreateUpdatePw from '../components/CreateUpdatePw';
import IdCheckInput from '../components/IdCheckInput';
import EmailForm from '../components/EmailForm';

const reducer = (state, action) => {
    switch (action.type) {
    }
};
const Signup = () => {
    const [signup, dispatch] = useReducer(reducer, {
        pw: '', ck: '', email : '', code : '', // 실제 값
        idError: false, pwError: false, ckError: false, eError : false, codeError : false, // 에러 컨트롤
        idMsg: '', pwMsg: '', ckMsg: '', eMsg : '', codeMsg : '', // 에러 메시지
    });
    const pwHandle = useCallback((e) => dispatch({ type: 'pwHandle', value: e.target.value }), [dispatch]);
    const ckHandle = useCallback((e) => dispatch({ type: 'ckHandle', value: e.target.value }), [dispatch]);


    const createUpdatePwProps = useMemo(() => ({
        pwHandle, pwError: signup.pwError, pwMsg: signup.pwMsg,
        ckHandle, ckError: signup.ckError, ckMsg: signup.ckMsg,
    }), [pwHandle, signup.pwError, signup.pwMsg, ckHandle, signup.ckError, signup.ckMsg]);

    const today = useMemo(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }, []);
    return (
        <div className="flex h-screen flex-wrap content-center justify-center">
            <fieldset className="fieldset border-base-300 rounded-box w-xs border bg-white p-4">
                <legend className="fieldset-legend text-center text-4xl">ChatBridge</legend>

                <IdCheckInput />
                <CreateUpdatePw {...createUpdatePwProps} />
                <EmailForm />

                <label className="label">Brith</label>
                <input type="date" className="input" max={today} />
                <button className="btn btn-neutral mt-4">sign up</button>

                <div className="mt-5 flex w-full">
                    <Link to="/" className="card grid grow place-items-start font-bold">
                        login
                    </Link>
                </div>
            </fieldset>
        </div>
    );
};
export default Signup;
