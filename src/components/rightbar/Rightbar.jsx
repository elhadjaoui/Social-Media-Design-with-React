import './rightbar.css';
import { Users } from '../../dummyData';

export default function Rightbar({ profile }) {

    const Homerightbar = () => {
        return (
            <>
                <div className="Birthdaycontainer">
                    <img className="birthdayImage" src="/assets/gift.png" alt="gift" />
                    <span className="birthdayText">
                        <b>Ploa Foster</b> and <b>Ilham khamssa</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="ad" />
                <h4 className="onlineFriendsTitle">Online Friends</h4>
                <ul className="olinefriendsList">
                    {Users.map((u) => {
                        return (
                            <li key={u.id} className="onlineFriend">
                                <img src={u.profilePicture} alt="" className="olinefriendImg" />
                                <span className="onlinefriendName">{u.username}</span>
                                <span className="isOnline"></span>
                            </li>
                        );
                    })}
                </ul>
            </>


        );
    }

    const Profilerightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/1.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/2.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/3.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/4.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/5.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/6.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbatWrap">
                {profile ? <Profilerightbar /> : <Homerightbar />}
            </div>
        </div>
    )
}
