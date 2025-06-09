import { useCallback, useEffect, useState } from "react";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";

const FindID = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState({ email: ''});
    const update = useCallback(update => setEmail(update), [setEmail]);
    useEffect(() => {
        console.log(email)
        if (email.email.length <= 0) return;
        setId("123");
    }, [email.email])
    return (
        <fieldset className="fieldset border-base-300 rounded-box w-xs md:mr-4 border bg-white p-4">
            <legend className="fieldset-legend text-center text-4xl">ChatBridge</legend>

            <EmailForm update={update} />

            <div className="mt-5 flex w-full">
                <Link to="/" className="card grid grow place-items-start font-bold">
                    login
                </Link>
            </div>
            <div className="h-50 text-xl text-center content-center">
                {id.length > 0 && <>아이디는<p className = "text-2xl font-bold">{id}</p>입니다.</>}
            </div>
        </fieldset>
    );
};
export default FindID;