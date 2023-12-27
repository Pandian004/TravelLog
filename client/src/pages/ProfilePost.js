import Demo from '../AssertsNew/DemoPic.jpg'
import './ProfilePost.css'
import {Link} from 'react-router-dom'

function ProfilePost(){
    return(
        <div>
            <Link id='link-profilepost' to='/ViewPost'>
                <div className="ProfilePost">
                <div className="images-profilepost">
                    <img src={Demo} alt='/'/>
                </div>
                <h3 className='title-profilepost'>The Himalayas: Nature's Majestic Giants</h3>
                </div>
            </Link>
        </div>
    );
}

export default ProfilePost;