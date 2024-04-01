import { faCss3, faReact } from '@fortawesome/free-brands-svg-icons';
import './service.css';
import { faCode, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyServices()
{
    return (
        <>
        <div className="service-container">
            <div className="second-container">
                <div className="service-text">
                    <p className="what-i-do">My skills and level of experience</p>
                </div>
                <div className="service-display">
                    <div className="cards">
                        <FontAwesomeIcon icon={faCode} size="2x" style={{padding: '1.5rem 0rem'}} />
                        <p className="html">
                        I'm Waore Maxwel, a full-stack web developer specializing in front-end development. 
                        With expertise in React, HTML5, CSS, and REST API.
                        </p>
                        <p>Level of experty:
                            <span className='master'>Master</span>
                        </p>
                        <div className="ratings">
                            <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
                            <FontAwesomeIcon icon={faStar} size="1x"  color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                        </div>
                        <button className='more'>For mores</button>
                    </div>
                    <div className="cards">
                        <FontAwesomeIcon icon={faCss3} size="2x" style={{padding: '1.5rem 0rem'}} />
                        <p className="html">
                        I'm Waore Maxwel, a full-stack web developer specializing in front-end development. 
                        With expertise in React, HTML5, CSS, and REST API,
                        </p>
                        <p>Level of experty: <span className='master'>
                            Master</span>
                        </p>
                        <div className="ratings">
                            <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
                            <FontAwesomeIcon icon={faStar} size="1x"  color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                        </div>
                        <button className='more'>For mores</button>
                    </div>
                    <div className="cards">
                        <FontAwesomeIcon icon={faReact} size="2x" style={{padding: '1.5rem 0rem'}} />
                        <p className="html">
                        I'm Waore Maxwel, a full-stack web developer specializing in front-end development. 
                        With expertise in React, HTML5, CSS, and REST API.
                        </p>
                        <p>Level of experty: 
                            <span className='intermediate'>intermediate</span>
                        </p>
                        <div className="ratings">
                            <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
                            <FontAwesomeIcon icon={faStar} size="1x"  color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='yellow' />
                            <FontAwesomeIcon icon={faStar} size="1x" color='#fff' />
                        </div>
                        <button className='more'>For mores</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}