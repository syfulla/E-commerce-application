import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items)

    return(
    <div className="flex justify-between bg-lime-100 h-20">
        <div >
            <img 
            className="h-20"
            alt="food" 
            src={LOGO_URL}
            />
        </div>
        <div className="nav-items-container">
            <ul className='flex p-10'>
                <li className='px-4'>
                    Online status:{onlineStatus ? '✅':'🔴'}
                </li>
                <li className='px-4'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='px-4'>
                   <Link to='contact-us'>Contact Us</Link> 
                </li>
                <li className='px-4'>
                    <Link to='about-us'>About Us</Link>
                </li>
                <li className='px-4 relative'>
                   <Link to='cart'>
                    Cart
                    <span className='bg-orange-500 w-3 text-center rounded-lg my-4 text-sm absolute bottom-1 right-1'>
                        {cartItems.length >0 ? cartItems.length: ''}
                    </span>
                    </Link>
                </li>
                <li className='px-4'>
                    <h3>{loggedInUser}</h3>
                </li>
            </ul>
        </div>
    </div>
    )
}

export const a = 5;

export default HeaderComponent;