import Post from './Post'
function Home(){
    return(
        <div className='home'>
           <h1>Latest blogs</h1>
           <div className="Posts">
                <Post />
                <Post />
                <Post />
           </div>
        </div>
    );
}

export default Home;