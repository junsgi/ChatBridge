import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navi = useNavigate();
    const logout = useCallback(() => {
        navi("/");
    }, [])
    return (
        <aside className="bg-base-200 flex w-64  flex-col p-4 shadow-md">

            <h1 className="mb-4 text-2xl font-bold">ChatBridge</h1>

            <nav className="flex flex-col space-y-2">
                <Link to="/generate" className="btn btn-ghost justify-start">
                    🤖 AI 답변 생성
                </Link>
                <Link to="/vocab" className="btn btn-ghost justify-start">
                    📘 단어장
                </Link>
                <Link to="/translate" className="btn btn-ghost justify-start">
                    🌐 AI 답변 번역
                </Link>
                <Link to="/gifts" className="btn btn-ghost justify-start">
                    🎁 선물/추천
                </Link>
                <Link to="/mypage" className="btn btn-ghost justify-start">
                    🙋 마이페이지
                </Link>
            </nav>
            <div className="border-base-300 mt-auto border-t pt-4">
                <button className="btn btn-outline btn-error w-full" onClick = {logout}>로그아웃</button>
            </div>
        </aside>
    );
};
export default SideBar;
