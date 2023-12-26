import './ViewPost.css'
import ProfilePic from '../AssertsNew/Default_Profile_Pic.jpg'
import Edit from '../AssertsNew/edit.png'
import Delete from '../AssertsNew/delete.png'

function ViewPost(){
    return(
        <div className="ViewPost">
            <div className="author-ViewPost">
                    <div className="authorInfo">
                        <img src={ProfilePic} alt='/'className='profileIcon-ViewPost'/>
                        <h3>UserName</h3>
                    </div>
                    <div className="toolBar">
                        <img src={Edit} alt='editButton' id='editButton'/>
                        <img src={Delete} alt='deleteButton' id='deleteButton'/>
                    </div>
            </div>
            <hr />
            <div className="title-ViewPost">
                <h1>The Himalayas: Nature's Majestic Giants</h1>
            </div>
            <div className="image-ViewPost">
                <img src="https://images.pexels.com/photos/5431372/pexels-photo-5431372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Himalayas" width={450} height={313} />
            </div>
            <div className="blogContent-ViewPost">
                <p>
                    The Himalayas: a majestic realm that captures the imagination, a region that encapsulates both spiritual tranquility and 
                    breathtaking natural beauty. Stretching over 1,500 miles across five countries—India, Nepal, Bhutan, China, and Pakistan—the 
                    Himalayas are not just a mountain range; they are a symbol of resilience, spirituality, and natural wonder.
                </p>

                <h2>Awe-Inspiring Majesty</h2>
                <p>
                    The Himalayas, home to some of the world's tallest peaks, including the awe-inspiring Mount Everest, stand tall as nature's 
                    masterpiece. The range is adorned with a stunning diversity of landscapes, from snow-capped peaks piercing the sky to lush valleys 
                    teeming with life. The play of light on these colossal mountains at sunrise and sunset creates a spectacle that words can barely 
                    capture.
                </p>

                <h2>Spiritual Sanctuary</h2>
                <p>For centuries, the Himalayas have been a sanctuary for spiritual seekers. The region is steeped in religious and cultural 
                    significance, with ancient monasteries, temples, and sacred sites dotting its expanse. The tranquil ambiance fosters introspection 
                    and draws pilgrims and seekers from around the globe, seeking solace and enlightenment amidst the serene surroundings.
                </p>

                <h2>Biodiversity Hotspot</h2>
                <p>Beyond its towering peaks, the Himalayas harbor an incredible array of biodiversity. The diverse ecosystems support a wide variety 
                    of flora and fauna, some of which are endemic to this region. Rare species like the snow leopard, red panda, and Himalayan blue 
                    poppy find their home in these mountains, emphasizing the importance of conservation efforts to protect this unique ecosystem.
                </p>

                <h2>Adventure Playground</h2>
                <p>For adventure enthusiasts, the Himalayas offer an unparalleled playground. Trekking trails wind through picturesque landscapes, 
                    inviting hikers to explore hidden valleys and witness panoramic vistas. Mountaineers test their limits on challenging peaks, while 
                    thrill-seekers indulge in activities like white-water rafting, paragliding, and skiing, making it a haven for adrenaline junkies.
                </p>

                <h2>Challenges and Conservation</h2>
                <p>However, this ethereal beauty faces numerous challenges. Climate change poses a significant threat, melting glaciers and altering 
                    the delicate balance of ecosystems. Human activities, including deforestation and pollution, endanger the region's biodiversity.
                     Sustainable practices and conservation efforts are crucial to preserve the Himalayas for future generations.
                </p>

                <h2>Conclusion</h2>
                <p>The Himalayas stand as a testament to nature's grandeur, a place that inspires, humbles, and invites exploration. Whether you seek 
                    adventure, spiritual solace, or simply wish to bask in the awe-inspiring beauty of nature, the Himalayas offer an experience that 
                    leaves an indelible mark on the soul. As we cherish and protect this natural marvel, may its magnificence continue to captivate 
                    and inspire all who behold its splendor.
                </p>
            </div>
            <hr/>
            <div className="postInfo">
                <h4>Posted on:</h4>
                <p>19th Dec 2023 - 10:00 AM</p>
            </div>

        </div>
    );
}

export default ViewPost;