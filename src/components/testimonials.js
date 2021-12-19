import styled from 'styled-components';
import client1 from '../images/client1.png';
import client2 from '../images/client2.png';

const Testimonial = () => {
    return ( 
        <div style={{ textAlign: "center" , backgroundColor: "#FAFFC3"}}>
            <h1 className='fancyFont' style={{padding: '3rem 0 1rem 0'}}>Our Clients Say</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <Container>
                <Card>
                    <div className="id">
                        <img src={client1} alt="client" />
                        <div>
                            <h2>Josh</h2>
                            <p>Web designer</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptates voluptatum ea dignissimos accusantium amet illum necessitatibus debitis asperiores! Sunt voluptatem doloremque temporibus iusto! Unde!</p>
                </Card>
                <Card>
                    <div className="id">
                        <img src={client2} alt="client" />
                        <div>
                            <h2>Rachel</h2>
                            <p>Chef</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptates voluptatum ea dignissimos accusantium amet illum necessitatibus debitis asperiores! Sunt voluptatem doloremque temporibus iusto! Unde!</p>
                </Card>
            </Container>
        </div>
     );
}
 
export default Testimonial;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-width: 20rem;
    padding: 2rem;
    margin: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
    .id {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        div{
            margin: 0 0 0 0.5rem;
            text-align: start;
        }
    }
    img {
        width: 5rem;
    }
`;