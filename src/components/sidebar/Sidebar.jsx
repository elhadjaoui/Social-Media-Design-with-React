import './sidebar.css'
import {
    RssFeed, Event, Chat,
    School,
    WorkOffOutlined,
    HelpOutline,
    Bookmark,
    Group,
    PlayCircleFilledOutlined
} from '@material-ui/icons';

import { Users } from '../../dummyData';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarlistitemText">Feed</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarlistitemText">Chat</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarlistitemText">Bookmarks</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarlistitemText">Groups</span>
                    </li>
                    <li className="sidebarlistItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarlistitemText">Videos</span>
                    </li>
                    <li className="sidebarlistItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarlistitemText">School</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarlistitemText">Events</span>
                    </li>
                    <li className="sidebarlistItem">
                        <WorkOffOutlined className="sidebarIcon" />
                        <span className="sidebarlistitemText">Jobs</span>
                    </li>
                    <li className="sidebarlistItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarlistitemText">Questions</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"></hr>
                <ul className="sidebarFriendlist">
                    {Users.map((u) => {
                        return (<li key={u.id} className="sidebarFriend">
                            <img className="sidebafriendImage" src={u.profilePicture} alt="person" />
                            <span className="sidebarfriendName">{u.username}</span>
                        </li>);
                    })}


                </ul>
            </div>
        </div>
    )
}
