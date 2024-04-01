import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { faAddressBook, faEarthAfrica, faEnvelope, faLaptopCode, faLocation, faMessage, faMobilePhone, faPhone } 
from '@fortawesome/free-solid-svg-icons';
import { faDeploydog, faFigma, faLinkedin, faServicestack, faWebflow } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Footer()
{
    const [message, setMessage] = useState("");
    const newRef = useRef();
    
    useEffect(()=> {
        
        return;

    },[message]);

    function HandlesNumberingSubmit(event)
    {
        const [message, setMessage] = useState();

        setMessage("Form submitted");
        event.preventDefault();
        
    }


    return (
        <footer>
            <div className="main-contain">
            <div className="services">
                    <div className='service-icon'>
                        <FontAwesomeIcon icon={faServicestack} size='2x' />
                    </div>
                    <p className='contacts-me'>My amazing services</p>
                    <p>
                        <FontAwesomeIcon icon={faLaptopCode} style={{paddingRight: '0.5rem'}} />
                        Responsive design
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faDeploydog} style={{paddingRight: '0.5rem'}} />
                        websites deployment
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faFigma} style={{paddingRight: '0.5rem'}} />
                        Translating figma designs
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faWebflow} style={{paddingRight: '0.5rem'}} />
                        Web development
                    </p>
                </div>
                <div className="contacts">
                    <div className='local-address'>
                        <FontAwesomeIcon icon={faMobilePhone} size='2x' />
                    </div>
                    <p className='contacts-me'>Contact me</p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} style={{paddingRight: '0.5rem'}} />
                        0796066170
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} style={{paddingRight: '0.5rem'}} />
                        0738904067
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faLinkedin} style={{paddingRight: '0.5rem'}} />
                        Waore Maxwel
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} style={{paddingRight: '0.5rem'}} />
                        Waoremaxwel17@gmail.com
                    </p>
                </div>
                <div className='address'>
                    <div className='address-me'>
                        <FontAwesomeIcon icon={faLocation} size='2x' />
                    </div>
                    <p className='contacts-me'>Developer's address</p>
                    <address>
                        <p>
                            <FontAwesomeIcon icon={faAddressBook} style={{paddingRight: '0.5rem'}} />
                            3078-00100 westlands</p>
                        <p>
                            <FontAwesomeIcon icon={faAddressBook} style={{paddingRight: '0.5rem'}} />
                            3078-40100 Kisumu</p>
                        <p>
                            <FontAwesomeIcon icon={faAddressBook} style={{paddingRight: '0.5rem'}} />
                            2078-40100 milimani
                            </p>    
                        <p>
                            <FontAwesomeIcon icon={faEarthAfrica} style={{paddingRight: '0.5rem'}} />
                            Nairobi Kenya</p>
                    </address>
                </div>
                <div className='leave-message'>
                    <div className='message-icon'>
                        <FontAwesomeIcon icon={faMessage} size='2x' />
                    </div>
                    <form action=''>
                        <div className='data'>
                            <input type='email' placeholder='somebody@gmail.com' className='ps-email' />
                            <input type='text' placeholder='Leave a message' className='ps2-text' ref={newRef} />
                            <button className='submit' onClick={()=> HandlesNumberingSubmit}>Leave a message</button>
                            <p className='submit-message'>{message}</p>
                        </div>    
                    </form>    
                </div>
            </div>
            <div className='copywrite'>
                <p>&copy;WaoreMaxwel @2024 Nairobi</p>
            </div>
        </footer>
    );
}