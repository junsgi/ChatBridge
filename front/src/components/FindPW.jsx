import { useCallback, useState } from "react";
import EmailForm from "./EmailForm";
import CreateUpdatePw from "./CreateUpdatePw";
import { Link } from "react-router-dom";

const FindPW = () => {
    const [data, setData] = useState({ a : ''});
    const [idError, setError] = useState(false);
    const [idSuccess, setSuccess] = useState(false);
    const update = useCallback(update => setData(update), [setData]);
    return (
        <fieldset className="fieldset border-base-300 rounded-box w-xs md:ml-4 border bg-white p-4">
            <legend className="fieldset-legend text-center text-4xl">ChatBridge</legend>

            <div className="flex w-full flex-col space-y-1">
                <label className="label">ID</label>

                <div className="join w-full">
                    <input type="text" minLength={2} maxLength={20} className={`input join-item w-full ${idError ? 'input-error' : idSuccess ? 'input-success' : ''}`} placeholder="ID" />
                </div>
            </div>

            <EmailForm update={update} />
            <CreateUpdatePw update={update} />
            <button className="btn btn-neutral mt-4" onClick={() => console.log(data)}>
                비밀번호 변경
            </button>

            <div className="mt-5 flex w-full">
                <Link to="/" className="card grid grow place-items-start font-bold">
                    login
                </Link>
            </div>
        </fieldset>
    );
};
export default FindPW;