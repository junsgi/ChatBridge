import SideBar from "../components/contents/SideBar";
import Nav from "../components/contents/Nav";
const MainPage = () => {
    return (
        <div className="h-screen bg-white">

            <div name="horizontal divider" className="flex w-full h-full">

                <div className="card grid h-full">
                    <SideBar />
                </div>

                <div name="vertical divider" className="flex w-full flex-col">

                    {/* Navbar */}
                    <div className="card grid h-20 place-items-center">
                        <div className="card grid h-20 w-full">
                            <Nav />
                        </div>
                    </div>

                    {/* content */}
                    <div className="card grid h-full place-items-center">

                        {/* 채팅, 감정분석 레이아웃 */}
                        <div name="input and analysis" className="flex w-full h-full">

                            {/* 채팅 레이아웃 */}
                            <div className="card grid w-[80%] h-full">
                                <div className="flex flex-col w-full">
                                    <div className="card border grid h-[85%] place-items-center">채팅쪽</div>
                                    <div className="card border grid h-[15%] place-items-center">입력쪽</div>
                                </div>

                            </div>

                            {/* 감정분석 레이아웃 */}
                            <div className="card bg-base-300 border grid w-[20%] h-full place-items-center">분석</div>
                        </div>

                    </div>

                </div> {/** vertical divider */}

            </div> {/** horizontal divider */}

        </div>
    );
};

export default MainPage;
