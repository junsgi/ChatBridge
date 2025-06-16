import SideBar from '../components/contents/SideBar';
import Nav from '../components/contents/Nav';
import WriteChat from './WriteChat';
import { useState } from 'react';
const MainPage = () => {
    return (
        <div className="h-screen bg-white">
            <div name="horizontal divider" className="flex h-full w-full">
                <SideBar />
                <div name="vertical divider" className="flex w-full flex-col">
                    {/* Navbar */}
                    <div className="card grid">
                        <div className="card grid w-full">
                            <Nav />
                        </div>
                    </div>

                    {/* content */}
                    <div className="card grid h-full">
                        {/* 채팅, 감정분석 레이아웃 */}
                        <div name="input and analysis" className="flex h-full w-full">
                            {/* 컨텐츠 레이아웃 */}
                            <div className="card grid h-full w-[80%]">
                                <div className="flex w-full flex-col">
                                    {/* 왼쪽 탭 기준 컨텐츠 */}
                                    <div className="card grid" style={{ height: '80%' }}>
                                        <WriteChat />
                                    </div>

                                    {/* 입력 */}
                                    <div className="card grid w-full pb-5 pl-3 pr-3">
                                        <ChatInput />
                                    </div>
                                </div>
                            </div>

                            {/* 감정분석 레이아웃 */}
                            <div className="card grid h-full w-[20%] content-center justify-center border border-gray-200">
                                <div className="content-center justify-center space-y-[20%] text-end font-bold">
                                    <p>기쁨 지수 😄 : 0%</p>
                                    <p>분노 지수 😠 : 0%</p>
                                    <p>슬픔 지수 😢 : 0%</p>
                                    <p>두려움 지수 😨 : 0%</p>
                                    <p>놀람 지수 😲 : 0%</p>
                                    <p>혐오 지수 🤢 : 0%</p>
                                    <p>중립 지수 😐 : 0%</p>
                                    <p>안도 지수 😌 : 0%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/** vertical divider */}
            </div>
            {/** horizontal divider */}
        </div>
    );
};

export default MainPage;

const ChatInput = () => {
    return (
        <div className="flex w-full flex-col rounded-2xl border border-gray-500">
            <div className="card grid place-items-center">
                <textarea className="max-h-40 w-full resize-none overflow-y-auto p-4 outline-none" placeholder="요구사항을 입력하세요..." />
            </div>

            <div className="flex w-full">
                <div className="card grid grow place-items-start">
                </div>
                <div className="card grid grow place-items-end">
                    <div className="card grid place-items-end">
                        <button className="btn btn-circle mb-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em] rotate-[-270deg]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12l16.5-9-4.125 9L20.25 21l-16.5-9z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
