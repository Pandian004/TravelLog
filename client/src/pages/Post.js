import Blike from '../Blike.png';
import Alike from '../Alike.png';
import { useState } from 'react';

function Post(){
    const [isLike, setIsLike] = useState(false),
            [like, setLike] = useState(0);

 
    return(
        <div className="Post">
            <h3>The Himalayas: Nature's Majestic Giants</h3>
            <div className="images1">
                <img src="https://images.pexels.com/photos/5431372/pexels-photo-5431372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Himalayas" width={450} height={313} />
            </div>
            <div className="content">
                <p>The Himalayas stand tall, their snow-capped peaks piercing the sky. Spanning across five countries, these majestic mountains hold an unparalleled allure. With peaks reaching dizzying heights, they cradle diverse ecosystems, from lush forests to icy glaciers. Revered as sacred by many cultures, the Himalayas embody both spiritual significance and breathtaking beauty. Offering adventure to trekkers and solace to seekers, they inspire awe and humility. Home to unique wildlife and diverse communities, these towering giants are a testament to nature's grandeur. The Himalayas, a testament to the sublime power and mystique of our natural world.</p>
            </div>
            <hr/>
            <div className="addFeature">
                <div className="likes">
                    <img src={isLike?Alike:Blike} alt='likes' onClick={()=>{setIsLike(!isLike);setLike(like+(isLike? -1:1))} }/>
                    <p>{like} Likes</p>
                </div>
                <div className="author">
                    <h5>Posted by: UserName</h5>
                </div>
            </div>
           
        </div>
    );
}

export default Post;