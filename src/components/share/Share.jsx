import './share.css'
import { PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons';

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrap">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="profile" className="shareprofileImage"/>
                    <input type="text" placeholder="What's in your mind" className="shareInput"/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareoptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label  htmlColor="Orange" className="shareIcon"/>
                            <span className="shareoptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room className="shareIcon"  htmlColor="MediumSeaGreen"/>
                            <span className="shareoptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareIcon"  htmlColor="DodgerBlue"/>
                            <span className="shareoptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
