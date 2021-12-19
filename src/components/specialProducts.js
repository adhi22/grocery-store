import apple from "../images/apple.png";
import cookies from "../images/cookies.png";
import almond from "../images/almond.png";
import styled from 'styled-components';
import { Star } from '@material-ui/icons';

const Special = () => {
    return ( 
        <div style={{ textAlign: "center" }}>
            <h1 className='fancyFont' style={{margin: '3rem'}}>Our Special Products</h1>
            <Container>
                <Item>
                    <img src={apple} alt="apple" />
                    <div>
                        <h4>Apple</h4>
                        <Star/><Star/><Star/><Star/><Star/>
                        <p>$123.00</p>
                        <button>Add to Cart</button>
                    </div>
                </Item>
                <Item>
                    <img src={cookies} alt="cookies" />
                    <div>
                        <h4>Chocolate Cookies</h4>
                        <Star/><Star/><Star/><Star/><Star/>
                        <p>$123.00</p>
                        <button>Add to Cart</button>
                    </div>
                </Item>
                <Item>
                    <img src={almond} alt="almond" />
                    <div>
                        <h4>California Almonds</h4>
                        <Star/><Star/><Star/><Star/><Star/>
                        <p>$123.00</p>
                        <button>Add to Cart</button>
                    </div>
                </Item>
            </Container>
        </div>
     );
}
 
export default Special;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #eee;
    max-width: 35rem;
    margin: 1rem;
    border-radius: 0.75rem;
    padding: 0 1.5rem 0 0;
    img {
        height: 40%;
    }
    button{
        background-color: green;
        color: #fff;
        border-radius: 20rem;
        border: none;
        margin: 0.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    @media (max-width:500px){
        img{
            width: 40%;
        }
        div {
            padding: 1rem 0;
        }
    }
`;
