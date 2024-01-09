import Avatar from 'react-avatar-edit';
import './AddInfo.css';
import ProfilePic from '../AssertsNew/Default_Profile_Pic.jpg'
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
    console.log(preview);
    const [showModal, setShowModal] = useState(false);
    const [exist, setExist] = useState(false);
    return(
        <div className="avatar-addInfo">
            <h3>Update your profile</h3>
            <hr/>
            <div className="Avatar">
            <img src={preview} alt='/' className='ProfilePic' onClick={()=>{setShowModal(!showModal)}}/>
                {showModal && 
                    <div className="modal-Update" id="modal">
                        <div className="modal-content-Update">
                            <Avatar 
                                height={400}
                                width={600}
                                imageHeight={400}
                                label={"Select a profile photo"}
                                onCrop={onCrop}
                                onClose={onClose}
                                src={null}
                            /><br/>
                            <button id='Save-btn' type='submit' onClick={()=>{setShowModal(!showModal)}}>Save</button>
                        </div>
                    </div>
                }
                <div className="Info" onClick={() => {setExist(exist)}}>
                    <form>
                        {exist?<h4 id='Warning'>* Username already exist</h4>:" "}
                        <input type='text' placeholder='Pick a Username ' required/>
                        <textarea placeholder='About yourself...(Optional)' rows={5} />
                        <Link to="/"> <button type='submit'><strong>Update</strong></button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddInfo;