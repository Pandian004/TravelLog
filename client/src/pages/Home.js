import Post from './Post'
function Home(){
    return(
        <div className='home'>
           <h1>Latest Posts</h1>
           <div className="Posts">
                <Post />
                <Post />
                <Post />
           </div>
        </div>
    );
}

export default Home;