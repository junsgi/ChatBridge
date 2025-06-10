import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateUpdatePw from '../components/user/CreateUpdatePw';
import IdCheckInput from '../components/user/IdCheckInput';
import EmailForm from '../components/user/EmailForm';

const Signup = () => {
    const [data, setData] = useState({ id : '', pw : '', email : '', birth : ''});
    const update = useCallback((update) => {
        setData(prev => {return {...prev, ...update}})
    }, [setData]);
    const birth = useCallback(e => update({birth : e.target.value}), [update]);
    const today = useMemo(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }, []);
    return (
        <div className="flex min-h-screen flex-wrap content-center justify-center overflow-auto">
            <fieldset className="fieldset border-base-300 rounded-box w-xs border bg-white p-4">
                <legend className="fieldset-legend text-center text-4xl">ChatBridge</legend>

                <IdCheckInput update={update}/>
                <CreateUpdatePw update={update}/>
                <EmailForm update={update}/>

                <label className="label">Brith</label>
                <input type="date" className={`input ${data.birth.length > 0 ? 'input-success' : ''}`} max={today} onChange = {birth} />
                <button className="btn btn-neutral mt-4" onClick = {() => console.log(data)}>sign up</button>

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
