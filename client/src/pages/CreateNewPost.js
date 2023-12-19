import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreateNewPost.css';
import Post from '../Send.png';

export default function CreateNewPost(){
    return(
       <div className="createNewPost">
        <h1 className='header1'>Create New Post</h1>
        <div className="form-cnp">
            <input type="text" placeholder="Title" /><br/>
            <label >Select a image</label>
            <input type="file" /><br/>
            <ReactQuill /><br/>
            <button>Create Post <img src={Post} alt='postbtn' className='PostButton' /></button>
        </div>
       </div>
    );
}