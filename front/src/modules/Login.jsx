import { useCallback, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const reducer = (state, action) => {
    switch (action.command) {
        case 'id':
            return { ...state, id: action.id };
        case 'pw':
            return { ...state, pw: action.pw };
        default:
            return state;
    }
};
const Login = () => {
    const [warring, setWarring] = useState(false);
    const [data, dispatch] = useReducer(reducer, { id: '', pw: '' });
    const navi = useNavigate();
    
    const loginProcess = useCallback(() => {
        if (data.id.length > 0 && data.pw.length > 0)
            navi("/main")
        else
            setWarring(prev => true);
    }, [data]);

    const idMonitor = useCallback(e => dispatch({command : 'id', id : e.target.value}), [data.id])
    const pwMonitor = useCallback(e => dispatch({command : 'pw', pw : e.target.value}), [data.pw])
    return (
        <div className="flex h-screen flex-wrap content-center justify-center">
            <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-4xl text-center">ChatBridge</legend>

                <label className="label">ID</label>
                <input type="text" className="input" placeholder="ID" onChange={idMonitor}/>

                <label className="label">PW</label>
                <input type="password" className="input" placeholder="PW" onChange={pwMonitor}/>
                <button className="btn btn-neutral mt-4" onClick={loginProcess}>
                    Login
                </button>

                <div className="mt-5 flex w-full">
                    <Link to="/findIDPW" className="card grid grow place-items-start font-bold">
                        ID/PW찾기
                    </Link>
                    <Link to="/signup" className="card grid grow place-items-end font-bold">
                        회원가입
                    </Link>
                </div>

                {/* 경고창 */}
                {warring && (
                    <div role="alert" className="alert alert-error mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>아이디 혹은 비밀번호를<br/>다시 확인해주세요.</span>
                    </div>
                )}

            </fieldset>
        </div>
    );
};
export default Login;
