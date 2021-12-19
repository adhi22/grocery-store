import { useState } from 'react';
import styled from 'styled-components';
import shopping from '../images/shopping.png';
import { useTimer } from 'react-timer-hook';


const Discount = ({expiryTimestamp}) => {
    const {
        seconds,
        minutes,
        hours,
        days,
      } = useTimer({ expiryTimestamp});
    
    return ( 
        <Container>
            <TextContainer>
                <h1 className='fancyFont' style={{margin: '3rem'}}>Special discount on all products</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, debitis eos! Animi ut commodi obcaecati nihil aspernatur esse nulla omnis architecto ducimus tenetur rem dolore, minus vel adipisci quaerat maxime!</p>
                <div class="countdown-window">
                    <div>
                        <h2 class="days">{days}</h2>
                        <h3>Days</h3>
                    </div>
                    <div>
                        <h2 class="hours">{hours}</h2>
                        <h3>Hours</h3>
                    </div>
                    <div>
                        <h2 class="minutes">{minutes}</h2>
                        <h3>Minutes</h3>
                    </div>
                    <div>
                        <h2 class="seconds">{seconds}</h2>
                        <h3>Seconds</h3>
                    </div>
                </div>
                <button>Buy Now</button>
            </TextContainer>
            <img src={shopping} alt="" />
        </Container>
     );
}
 
export default Discount;

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    background-color: #D6FFC3;
    button{
        background-color: green;
        border: none;
        color: #fff;
        border-radius: 0.25rem;
        margin: 0.75rem;
        padding: 0.5rem 1rem;
    }
    @media (max-width:600px){
        img{
            width: 100%;
        }
    }
`;

const TextContainer = styled.div`
    display: flex;
    /* flex: 1; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 50rem;
    h1{
        text-align: center;
    }
    p{
        text-align: center;
        max-width: 30rem;
        margin: 0 2rem;
    }
    .countdown-window {
        display: flex;
        flex-direction: row;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 1rem;
        }
    }
`;