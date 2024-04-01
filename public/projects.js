import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './projects.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Projects(prop)
{
    return (
        <>
        <div className="container">
            <div className='persuade-client'>
                <span className='linethru'>
                    <p className='add-size'>My amazing projects</p>
                </span>
            </div>
            <div className="card-display">
                <div className='project-images'>
                    <img src='bluewebsite.jpg' alt='ecommerce'   className='size-image' />
                    <img src='black2.jpg' alt='ecommerce'  className='size-image' />
                    <img src='blackecomm.jpg' alt='ecommerce'  className='size-image' />
                    <img src='movie.jpg' alt='ecommerce'  className='size-image' />
                    <img src='ux.jpg' alt='ecommerce'  className='size-image' />
                </div>
            </div>
        </div>
        </>
    );
}