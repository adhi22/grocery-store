import styled from 'styled-components';

const News = () => {
    return ( 
        <div style={{ textAlign: "center" }}>
            <h1 className="fancyFont" style={{margin: '3rem 0 1rem 0'}}>Our latest news</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <Container>
                <MainNews>
                    <img src="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="vegetables" />
                    <div>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor quo at rem quia dolore magnam ipsum. Aliquam!</p>
                        <button>Read More</button>
                    </div>
                </MainNews>
                <SubNews>
                    <Item>
                        <img src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="fruits" />
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button>Read More</button>
                        </div>
                    </Item>
                    <Item>
                        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="pizza" />
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, qui.</p>
                            <button>Read More</button>
                        </div>
                    </Item>
                </SubNews>
            </Container>
            <Newsletter>
                <h1 className="fancyFont" style={{margin: '1rem 0'}}>Subscribe to our newsletter</h1>
                <div>
                    <input type="email" placeholder='Email'/>
                    <button>Read More</button>
                </div>
            </Newsletter>
        </div>
     );
}
 
export default News;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 70rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    button{
        background-color: green;
        color: #fff;
        border: none;
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
        margin: 0.25rem 0;
    }
`;
const MainNews = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: start; */
    img{
        width: 100%;
        padding: 2rem 5rem;
    }
    div {
        text-align: start;
        padding: 2rem 5rem;
    }
`;
const SubNews = styled.div`
    
    width: 35rem;
`;
const Item = styled.div`
    display: flex;
    flex: row;
    img{
        width: 50%;
        padding: 2.5rem 1rem;
    }
    div {
        padding: 2.5rem 1rem;
        text-align: start;
    }
`;

const Newsletter = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D6FFC3;
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