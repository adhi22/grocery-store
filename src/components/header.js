import styled from 'styled-components';
import { LocalGroceryStore, FavoriteBorderOutlined, AccountCircle, LocalGroceryStoreOutlined, Menu } from '@material-ui/icons';
import { useState } from 'react';

const Header = () => {
    const [isActive, setActive] = useState(false)
    const toggle = () => {
        setActive(!isActive);
        console.log("toggle", isActive);
        
    }
    
    return ( 
        <div>
            <Navbar>
                <div className="logo">
                    <LocalGroceryStore/>
                    <h3>Grocery</h3>
                </div>
                <ul className={isActive? 'active':'null'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Best sellers</a></li>
                    <li><a href="#">Deal of the day</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <div>
                    <button className='btn'><FavoriteBorderOutlined/></button>
                    <button className='btn'><LocalGroceryStoreOutlined/></button>
                    <button className='btn'><AccountCircle/></button>
                    <button className='btn menu' onClick={toggle}><Menu/></button>
                </div>
            </Navbar>
            <SearchBar>
                <input type="text" placeholder='Search here' id="" />
                <button className='search'>Search</button>
            </SearchBar>
        </div>
     );
}
 
export default Header;


const Navbar = styled.div`
    width: 100%;
    height: 5rem;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .logo {
        color: green;
        display: flex;
        flex-direction: row;
    }
    ul {
        display: flex;
        flex-direction: row;

        li{
            list-style-type: none;
            a{
                color: black;
                text-decoration: none;
                padding: 0 1rem;
                font-size: 0.9rem;
            }
        }
    }
    .btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0 1rem;
    }
    .menu {
        display: none;
    }
    @media (max-width:500px) {
        .btn {
            padding: 0 0.5rem;
        }
    }
    @media (max-width:770px) {
        .menu {
            display: inline;
        }
        ul.active{
            transform: translateX(-40%);   
        }
        ul {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            height: 100%;
            width: 30rem;
            background-color: #000;
            /* background-color: #000; */
            transform: translateX(-100%);
            transition: transform 250ms ease;
            width: 100%;
            li {
                margin: 1rem;
                a {
                    color: #fff;
                }
            }
            /* display: none !important; */
        }
    }
`;

const SearchBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    input, button{
        padding: 0.5rem;
        margin: 0 0 1rem 0;
        outline: none;
        border: 1px solid #888;
    }
    button {
        background-color: green;
        color: #fff;
        padding: 0.5rem 1rem;
        border: 1px solid green;
    }
`;