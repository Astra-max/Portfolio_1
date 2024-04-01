import './App.css';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar()
{
    const navElements = ['Home', 'About', 'Projects', 'Services', 'Contact'];
    const element = navElements.map(elem =>
          <li className='nav-elem'>{elem}</li>
        );

    return (
        <header>
            <div className="App">
                <div className='logo'>
                    <h1 className='logo-name'>Ast<span className='go'>ra</span></h1>
                    <ul className='display'>{element}</ul>
                </div>
                <div className='notification'>
                    <span className='icon-number'><FontAwesomeIcon icon={faBell} size="1x" className="social-icon" />
                    <span className='number'>6</span></span>
                    <FontAwesomeIcon icon={faMessage} size="1x" className='social-icon' />
                    <FontAwesomeIcon icon={faSearch} size="1x" className="social-icon" />
                </div>
                <div className='hire'>
                    <button className='hire-btn'>Hire me</button>
                </div>
            </div>
        </header>
    );
}