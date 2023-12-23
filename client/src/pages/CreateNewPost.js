import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreateNewPost.css';

export default function CreateNewPost(){
    return(
       <div className="createNewPost">
        <h1 className='header1'>Write your story...</h1>
        <div className="form-cnp">
            <form>
                <input type="text" placeholder="Title" required /><br/>
                <label >Select a image</label>
                <input type="file" required /><br/>
                <textarea placeholder='Summary of the blog' className='summary' required rows={5} /><br/>
                <ReactQuill /><br/>
                <div className='PostButton'>
                    <button type="submit"><strong>Create Post</strong> </button>
                </div>
            </form>
        </div>
       </div>
    );
}