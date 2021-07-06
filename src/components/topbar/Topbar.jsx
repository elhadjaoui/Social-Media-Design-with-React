import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import './topbar.css';

const Topbar = () => {
    return (
        <div className="topbarContainer">

            <div className="topbarLeft">
                <span className="logo">Mohamed</span>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />

                    <span>
                        <input type="text" placeholder="Search for freinds.." className="searchInput" />
                    </span>
                </div>

            </div>
            <div className="topbarRight">   
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarconItem">
                        <Person />
                        <span className="topbariconBadge">1</span>
                    </div>
                    <div className="topbarconItem">
                        <Chat />
                        <span className="topbariconBadge">2</span>
                    </div>
                    <div className="topbarconItem">
                        <Notifications />
                        <span className="topbariconBadge">5</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="profile" className="topbarImage" />
            </div>
        </div>
    )
}

export default Topbar
