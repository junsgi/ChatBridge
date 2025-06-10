import { useCallback, useState } from 'react';
import EmailForm from './EmailForm';
import CreateUpdatePw from './CreateUpdatePw';
import { Link } from 'react-router-dom';
import IdCheckInput from './IdCheckInput';

const FindPW = () => {
    const [data, setData] = useState({ id: '', email: '', pw: '' });
    const update = useCallback((update) =>
        setData((prev) => {
            return { ...prev, ...update };
        }
    ),[setData]);
    return (
        <fieldset className="fieldset border-base-300 rounded-box w-xs border bg-white p-4 md:ml-4">
            <legend className="fieldset-legend text-center text-4xl">ChatBridge</legend>

            <IdCheckInput update = {update}/>

            <EmailForm update={update} />
            {data.id.length * data.email.length > 0 && (
                <>
                    <p className = "mt-2 text-l">새 비밀번호 설정</p>
                    <CreateUpdatePw update={update} />
                    <button className="btn btn-neutral mt-4" onClick={() => console.log(data)}>
                        비밀번호 변경
                    </button>
                </>
            )}

            <div className="mt-5 flex w-full">
                <Link to="/" className="card grid grow place-items-start font-bold">
                    login
                </Link>
            </div>
        </fieldset>
    );
};
export default FindPW;
