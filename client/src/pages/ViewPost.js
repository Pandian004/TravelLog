import './ViewPost.css'
import ProfilePic from '../AssertsNew/Default_Profile_Pic.jpg'
import Edit from '../AssertsNew/edit.png'
import Delete from '../AssertsNew/delete.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function ViewPost(){
    const [showModal, setShowModal] = useState(false);
    return(
        <div className="ViewPost">
            <div className="author-ViewPost">
                    <div className="authorInfo">
                        <img src={ProfilePic} alt='/'className='profileIcon-ViewPost'/>
                        <h3>UserName</h3>
                    </div>
                    <div className="toolBar">
                       <Link to='/CreateNewPost' ><img src={Edit} alt='editButton' id='editButton'/></Link>
                        <img src={Delete} alt='deleteButton' onClick={() =>setShowModal(true)} id='deleteButton'/>
                    </div>
            </div>
            {showModal && 
            <div className="modal" id="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Deleting post</h1>
                    </div>
                    <hr/>
                    <div className="modal-body">
                        <h4>Are you sure you want to delete this post?</h4>
                        <div className="modal-button">
                            <button type='submit' id='confirmbtn'>Confirm</button>
                            <button type='submit' id='cancelbtn' onClick={() =>setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            }
            <hr />
            <div className="title-ViewPost">
                <h1>The Himalayas: Nature's Majestic Giants</h1>
            </div>
            <div className="image-ViewPost">
                <img src="https://images.pexels.com/photos/5431372/pexels-photo-5431372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Himalayas" width={450} height={313} />
            </div>
            <div className="blogContent-ViewPost">
                <p>
                    Embarking on a journey through the Himalayas is akin to stepping into a world where nature's magnificence knows no bounds. As a 
                    traveler, I found myself captivated by the allure of these colossal peaks, drawn to the promise of adventure, spirituality, 
                    and unparalleled beauty.
                </p>

                <h2>Embracing the Majesty</h2>
                <p>
                    Standing amidst the Himalayas, gazing at peaks that touch the sky, I felt an overwhelming sense of insignificance and wonder. 
                    The sheer scale of these mountains, from the iconic Mount Everest to the lesser-known gems, left me breathless. The play of light
                    on the snow-capped summits during sunrise and sunset was a sight that etched itself into my memory forever.
                </p>

                <h2>A Spiritual Sojourn</h2>
                <p>
                    As I traversed through ancient monasteries and revered temples nestled in the Himalayan valleys, I discovered a serene sanctuary
                    for the soul. The tranquility of these sacred sites, adorned with prayer flags fluttering in the mountain breeze, invited 
                    introspection and a sense of profound peace. The spirituality woven into the very fabric of this land resonated deeply within me.
                </p>

                <h2>Exploring Nature's Bounty</h2>
                <p>Each step along the trekking trails revealed a diverse tapestry of ecosystems. From dense forests teeming with life to high-altitude 
                    meadows painted with vibrant wildflowers, the Himalayas offered a glimpse into nature's abundance. Spotting elusive wildlife like 
                    the graceful snow leopard and encountering the unique flora was an experience that made me appreciate the delicate balance of these 
                    ecosystems.
                </p>

                <h2>Adventure Unleashed</h2>
                <p>
                    The Himalayas, a playground for thrill-seekers, beckoned with its array of adrenaline-pumping activities. Trekking along challenging 
                    paths, rafting through roaring rivers, and feeling the rush of paragliding amidst panoramic landscapes—the adventure here knows 
                    no bounds. Each escapade was a testament to both personal strength and the untamed beauty of this region.
                </p>

                <h2>Preserving a Treasure</h2>
                <p>
                    However, amidst the awe-inspiring beauty lay the looming threats of climate change and human impact. Witnessing the 
                    receding glaciers and understanding the fragility of this ecosystem reinforced the urgency of conservation efforts. It became 
                    clear that responsible travel and sustainable practices are imperative to safeguard this natural wonder for generations to come.
                </p>

                <h2>Conclusion</h2>
                <p>The Himalayas, with their blend of magnificence and serenity, have left an indelible mark on my journey. They are more than a 
                    destination; they are a testament to nature's grandeur and resilience. As I bid farewell to these majestic peaks, I carry with 
                    me not just memories but a profound appreciation for the delicate balance of our planet's treasures.
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