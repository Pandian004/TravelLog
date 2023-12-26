import Avatar from 'react-avatar-edit';
import './AddInfo.css';
import ProfilePic from '../Default_Profile_Pic.jpg'
import { useState} from 'react';
import {Link} from 'react-router-dom';

function AddInfo(){
    const [preview, setPreview] = useState(ProfilePic)
    const onClose = () => {
        setPreview(ProfilePic);
    }
    const onCrop = view => {
        setPreview(view);
    }
    console.log(preview)
    return(
        <div className="avatar-addInfo">
            <h3>Update your profile</h3>
            <hr/>
            <div className="Avatar">
                <Avatar 
                    height={400}
                    width={400}
                    imageWidth={400}
                    label={"Select a profile photo"}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={null}
                />
                <div className="Info">
                    <img src={preview} alt='/' className='ProfilePic'/>
                    <form>
                        <input type='text' placeholder='Pick a Username ' required/><br/><br/>
                        <textarea placeholder='About yourself...(Optional)' rows={5} /><br/>
                        <Link to="/"> <button type='submit'><strong>Update</strong></button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddInfo;