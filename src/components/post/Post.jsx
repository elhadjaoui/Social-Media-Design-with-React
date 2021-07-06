import './post.css'
import { Users } from '../../dummyData';
import { MoreVert } from '@material-ui/icons';
import { useState } from 'react';


const Post = ({ data }) => {

    const [like, setLike] = useState(data.like);
    const [islike, setisLike] = useState(false);


    const likeHandler = () =>
    {
        setLike(islike ? like - 1 : like + 1);
        setisLike(!islike);
    }

    var username = Users.filter((u) => u.id === data.id)[0].username;
    var profilePicture = Users.filter((u) => u.id === data.id)[0].profilePicture;
    return (
        <div className="post">
            <div className="postWrap">
                <div className="postTop">

                    <div className="postTopLeft">
                        <img src={profilePicture} alt="nada" className="postProfileImg" />
                        <span className="postUsername">{username}</span>
                        <span className="postDate"><small>{data.date}</small></span>
                    </div>
                    <div className="posttopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{data?.desc} </span>
                    <img src={data.photo} alt="nada" className="postImg" />
                </div>
                <div className="postBottom">

                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png"  onClick={likeHandler} alt="like" />
                        <img className="likeIcon" src="/assets/heart.png"  onClick={likeHandler} alt="love" />
                        <span className="postLikeCounter"><small>{like} people like it</small></span>
                    </div>
                    <div className="postbottomRight">
                        <span className="postCommentText">{data.comment} comments</span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
