import {Link} from 'react-router-dom';

const img = [
    "https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?w=900&t=st=1702463786~exp=1702464386~hmac=8b390584d2a608e666c06e73a7f5d70a05fdcda52cb13b72880af527c7a2bb0d",
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1702462365~exp=1702462965~hmac=3f2e4be8a0f342c2d091fdae58abac605ac7422857614f02c930c8d7aa7b03b8",
    "https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?w=900&t=st=1702462422~exp=1702463022~hmac=86f8f4e9d3e6431c06654876c6cbe565ac09552b32106bba7226f61015330225",
    "https://img.freepik.com/free-photo/snow-mountain-blue-sky-leh-ladakh-india_1150-11114.jpg?w=900&t=st=1702463869~exp=1702464469~hmac=90d072c567b3411097df7181f541c02acf3b6ac8888590359a0e90185acced4f",
    "https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg?w=900&t=st=1702462500~exp=1702463100~hmac=d3ea7b84f172d65a5f8f35b0636cba2cfa9fd848cedfd3266bf9edb4bdc8b01e",
    "https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=900&t=st=1702462517~exp=1702463117~hmac=51de89a3223b301f553fb613a0bf239f158171cce3ea97ccd2cd027ba282f5cf",
    "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=900&t=st=1702462537~exp=1702463137~hmac=2bba831a60afebf6ec9ff9383a4cede8775bb2a3ac4109162f9210949d9ae0a3",
    "https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?w=900&t=st=1702462570~exp=1702463170~hmac=fbb9c46ae30a70a50d0e8875fd8d460ee26dfffc0062bcf809895c2b8935b631",
    "https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?w=900&t=st=1702462596~exp=1702463196~hmac=0d0979a955d090994c2e59d2e6bbc965a469ddf9760435429f24a3858242a4c5",
    "https://img.freepik.com/free-photo/pier-lake-hallstatt-austria_181624-44201.jpg?w=900&t=st=1702462624~exp=1702463224~hmac=cb24366a6b99c4c071037864b89cb3e843aa664020cf035189f87a95525f21e7",
    "https://img.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_181624-53574.jpg?w=900&t=st=1702462982~exp=1702463582~hmac=b1ece8768db81e6476e26dd22a14f35fe2d4f0527a326a76a4cf595e8f303f24",
    "https://img.freepik.com/free-photo/water-stream-surrounded-by-mountains-flowers-sunny-day_181624-29802.jpg?w=900&t=st=1702463116~exp=1702463716~hmac=133f145974f8815ad16e6388c61df27ea6cdb98f282f4fc68187d1d012ffa103",
    "https://img.freepik.com/free-photo/beautiful-shot-namib-desert-africa-with-clear-blue-sky_181624-27309.jpg?w=900&t=st=1702463253~exp=1702463853~hmac=ddade833922758dcae763b468612c50248e95c321882fdf82fd17a2eed30b663",
    "https://img.freepik.com/free-photo/closeup-shot-sand-wave-texture-desert-sand-hill-front-rocks_181624-48913.jpg?w=900&t=st=1702463351~exp=1702463951~hmac=926b1180804212cd1f7c24dd6140feec233c2fa73d8043ebddcd3d88c63e8e99",

]
let imgsrc;
 function changeImg(){
   imgsrc = img[Math.floor(Math.random()*img.length)];
 }
function LoginPage(){     
    return(
        <div className="images" onLoad={changeImg()} >
            <img src={imgsrc} alt="pic"  />
            <div className='loginForm'>
            <h3>Welcome back, Traveller!</h3>
            <form>
                <input type="email" placeholder="Enter email" /><br /><br />
                <input type="password" placeholder="Enter password" /><br /><br />
                <Link to="/"><button type="submit">Login</button></Link>
            </form>
            </div>
        </div>
    );
}

export default LoginPage;