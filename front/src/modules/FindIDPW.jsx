import FindID from '../components/user/FindID';
import FindPW from '../components/user/FindPW';

const FindIDPW = () => {
    
    return (
        <div className="flex min-h-screen flex-wrap content-center justify-center overflow-auto">
            <FindID />
            <FindPW />
        </div>
    );
};

export default FindIDPW;
