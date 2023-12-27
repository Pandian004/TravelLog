import ProfilePic from '../AssertsNew/Default_Profile_Pic.jpg';
import AddButton from '../plus.svg';
import './Profile.css'
import {Link} from 'react-router-dom';
import ProfilePost from './ProfilePost';

function Profile(){
    return(
        <div className="profile">
            <div className="ProfileBar">
                <div className="profilePic">
                    <img src={ProfilePic} alt='Profile_Pic' className='avatar' />
                </div>
                    <div className="ProfileDetails">
                       <div className="userName">
                        <h3>UserName</h3>
                        <h5>Orignal Name</h5>
                       </div>
                       <hr/>
                        <p>Passionate travelers embody an insatiable curiosity for the world, finding joy in cultural immersion and diverse experiences. They seek connections beyond places, weaving tales of encounters and cherishing moments. With open minds and adventurous spirits, they navigate the unknown, leaving behind footprints of admiration and understanding across the globe's vast tapestry</p>
                    </div>
                    <div className="ProfileInfo">
                        <p>Joined on : 19th dec 2023</p>
                        <p>No.of blogs: 06</p>
                    </div>
            </div>
            <div className="display-post">
                <h2 className='yourPosts'>Your blogs</h2>
                <hr id='below-yourPost'/>
                <div className="addbtn">
                    <Link to='/CreateNewPost'><img src={AddButton} alt='AddButton' className='AddButton' /></Link>
                </div>

                <div className="post-profile">
                    <ProfilePost/>
                    <ProfilePost/>
                    <ProfilePost/>
                    <ProfilePost/>
                    <ProfilePost/>
                    <ProfilePost/>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;