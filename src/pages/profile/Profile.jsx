import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import  './profile.css'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="porfileRight">
                    <div className="profilerightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="cover" className="profileCoverImg"/>
                            <img src="assets/person/3.jpeg" alt="cover" className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileName">Mohamed El</h4>
                            <span className="profileDesc">May allah bless you</span>
                        </div>
                    </div>
                    <div className="profilerightBottom">
                        <Feed />
                        <Rightbar profile={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
