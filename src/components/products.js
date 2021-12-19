import styled from "styled-components";
import { Star, StarHalf, StarOutline } from '@material-ui/icons';

import fruits from "../images/fruits.png";
import eggsOutline from "../images/eggs-outline.png";
import meat from "../images/meat.png";
import vegies from "../images/vegies.png";
import milk from "../images/milk.png";

import apple from "../images/apple.png";
import spinach from "../images/spinach.png";
import potato from "../images/potato.png";
import eggs from "../images/eggs.png";
import cookies from "../images/cookies.png";
import rice from "../images/rice.png";
import onion from "../images/onion.png";
import almond from "../images/almond.png";

const OurProducts = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className='fancyFont'>Our products</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <CategoriesContainer>
                <Categories>
                    <img src={milk} alt='milk' />
                    <p>Milk</p>
                </Categories>
                <Categories>
                    <img src={fruits} alt='fruits' />
                    <p>Fruits</p>
                </Categories>
                <Categories>
                    <img src={vegies} alt='vegies' />
                    <p>Vegies</p>
                </Categories>
                <Categories>
                    <img src={eggsOutline} alt='eggs' />
                    <p>Eggs</p>
                </Categories>
                <Categories>
                    <img src={meat} alt='meat' />
                    <p>Meat</p>
                </Categories>
            </CategoriesContainer>

            <AllProductContainer>
                <AllProduct>
                    <img src={apple} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Apple</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                <AllProduct>
                    <img src={spinach} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Spinach</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                <AllProduct>
                    <img src={potato} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Potato</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                <AllProduct>
                    <img src={eggs} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Eggs</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                <AllProduct>
                    <img src={cookies} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Cookies</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                <AllProduct>
                    <img src={rice} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Rice</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                <AllProduct>
                    <img src={almond} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Almonds</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                <AllProduct>
                    <img src={onion} alt='' />
                    <div className="quantity">
                        <button>1/4kg</button>
                        <button>1/2kg</button>
                        <button>1kg</button>
                    </div>
                    <div className="stars">
                        <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </div>
                    <h4>Onion</h4>
                    <p>$100.00</p>
                    <button>Add to Cart</button>    
                </AllProduct>
                
            </AllProductContainer>
        </div>
    );
};

export default OurProducts;

const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 0;
`;

const Categories = styled.div`
    width: 8rem;
    height: 8rem;
    background-color: #eee;
    border-radius: 50%;
    margin: 0 1rem 3rem 1rem;
    img {
        width: 8rem;
        height: 8rem;
    }
`;

const AllProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    max-width: 65rem;
    margin: 2rem auto;
    gap: 1rem;
    @media (max-width:500px){
        grid-template-columns: 1fr 1fr;
        margin: 0.5rem;
        gap: 0.5rem;
    }
`;

const AllProduct = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 3rem;
    background-color: #eee;
    border-radius: 0.5rem;
    /* border: 1px solid black; */
    img {
        width: 100%;
    }
    button {
        border: none;
        color: #fff;
        background-color: green;
        padding: 0.25rem 0.75rem;
        margin: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    .quantity button {
        border: none;
        color: #eee;
        background-color: #A95A2B;
        margin: 0.25rem;
        padding: .25rem 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    
`;
