import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import {Posts} from '../../dummyData'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                    <Share/>
                    {Posts.map(element =>
                        {
                    return <Post key={element.id} data={element}/>
                        })}
                   
            </div>
        </div>
    )
}
