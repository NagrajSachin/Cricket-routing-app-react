const footerStyle = {
    fontHeight: 'bolder',
    fontSize: 'xx-large',
    margin: '10px',
    float: 'right'
}

const Footer = () => (
    <footer className='text-danger' style={footerStyle}>
        <h3 style={{textShadow: '5px 5px 6px orange', marginRight: '20px' }}>
            CopyRight &copy; 2023 Zensar Technologies!
        </h3>
    </footer>
)

export default Footer;