import ProfilePic from '../Default_Profile_Pic.jpg'
import AddButton from '../plus.svg';
import './Profile.css'
import {Link} from 'react-router-dom';
import Post from './Post';

function Profile(){
    return(
        <div className="profile">
            <div className="ProfileBar">
                <div className="profilePic">
                    <img src={ProfilePic} alt='Profile_Pic' className='avatar' />
                </div>
                    <div className="ProfileDetails">
                       <div className="userName">
                        <h3>Ds_Pandian</h3>
                        <h5>Dharma Sundhara Pandian K</h5>
                       </div>
                       <hr/>
                        <p>Passionate travelers embody an insatiable curiosity for the world, finding joy in cultural immersion and diverse experiences. They seek connections beyond places, weaving tales of encounters and cherishing moments. With open minds and adventurous spirits, they navigate the unknown, leaving behind footprints of admiration and understanding across the globe's vast tapestry</p>
                    </div>
                    <div className="ProfileInfo">
                        <p>Joined on : 19th dec 2023</p>
                        <p>No.of Posts: 03</p>
                    </div>
            </div>
            <div className="display-post">
                <h2 className='yourPosts'>Your Posts</h2>
                <div className="addbtn">
                    <Link to='/CreateNewPost'><img src={AddButton} alt='AddButton' className='AddButton' /></Link>
                </div>

                <div className="post">
                    <Post />
                    <Post />
                    <Post />
                </div>
                
            </div>
        </div>
    );
}

export default Profile;