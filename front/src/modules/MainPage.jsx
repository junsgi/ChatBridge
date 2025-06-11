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
                    <div className="card grid h-20 place-items-center">
                        <div className="card grid h-20 w-full">
                            <Nav />
                        </div>
                    </div>
                    <div className="card grid h-full place-items-center">

                        <div name = "input and analysis" className="flex w-full h-full">
                            <div className="card bg-base-300 rounded-box grid w-full h-full place-items-center">채팅</div>
                            <div className="card bg-base-300 rounded-box grid w-full h-full place-items-center">분석</div>
                        </div>
                    </div>

                </div> {/** vertical divider */}

            </div> {/** horizontal divider */}

        </div>
    );
};

export default MainPage;


/**

랭킹 알고리즘인데요

모두가 1등이라고 정해요
그럼
avg =  [75, 40, 95, 100, 20]
rank = [1, 1, 1, 1, 1]

2중 for문 돌면서
i!=j && i보다 큰게 있다면 rank[i]++;
*/