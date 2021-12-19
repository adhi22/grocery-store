import styled from 'styled-components';
import carrot from '../images/carrot.png';
import orange from '../images/orange.png';

const Landing = () => {
    return ( 
        <div>
            <Home>
                <p>100% healthy & affordable</p>
                <h1 className='catch-line fancyFont'>Organic Vegetables</h1>
                <p>Small Changes, Big Difference</p>
                <button>Shop Now</button>
            </Home>
            <HighlightsContainer>
                <Highlights style={{backgroundColor: "#FFE0CC"}}>
                    <img src={carrot} alt="carrot" />
                    <div>
                        <h3 className='fancyFont'>Veggies</h3>
                        <p><strong>100%</strong> organic products</p>
                        <button style={{backgroundColor: "orangered"}}>Buy now</button>
                    </div>
                </Highlights>
                <Highlights style={{backgroundColor: "#FFF2CC"}}>
                    <img src={orange} alt="orange" />
                    <div>
                        <h3 className='fancyFont'>Fruits</h3>
                        <p><strong>100%</strong> organic products</p>
                        <button style={{backgroundColor: "orange"}}>Buy now</button>
                    </div>
                </Highlights>
            </HighlightsContainer>
        </div>    
     );
}
 
export default Landing;

const Home = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url('https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .catch-line {
        color: #448002;
        font-size: 3rem;
        text-align: center;
        margin:0 1rem;
    }

    button {
        outline: none;
        padding: 0.5rem 2rem;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        margin-top: 1rem;
    }
`;

const HighlightsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Highlights = styled.div`
    height: 10rem;
    width: 25rem;
    /* background-color: #eee; */
    border-radius: 0.75rem;
    margin: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
        height: 80%;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0.5rem;
        /* background-color: #ddd; */
        border-radius: 20% 0 0 20%;
        
        button {
            padding: 0.25rem 0.5rem;
            width: fit-content;
            outline: none;
            border-radius: 1rem;
            border: none;
            margin-top: 0.5rem;
            color: #fff;
        }
    }
`;
