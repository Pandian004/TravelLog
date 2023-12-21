import ProfilePic from '../Default_Profile_Pic.jpg'

function Post(){
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
                    <h5>Posted by: </h5>
                    <img src={ProfilePic} alt='/'className='profileIcon'/>
                    <h5>UserName</h5>
            </div>
           
        </div>
    );
}

export default Post;