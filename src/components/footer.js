const Footer = () => {
    const style = {
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0'  
    }

    const linkStyle = {
        color: '#fff',
        padding: '0.5rem',
        textDecoration: 'none'
    }
    return ( 
        <div style={style}>
            <a href="#" style={linkStyle}>Help</a>
            <a href="#" style={linkStyle}>Support</a>
            <a href="#" style={linkStyle}>Information</a>
            <a href="#" style={linkStyle}>Contacy us</a>
            <a href="#" style={linkStyle}>Privacy policy</a>
        </div>
     );
}
 
export default Footer;