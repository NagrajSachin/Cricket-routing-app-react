import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">React</a>
                <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/cricketer/allCricketers' className='nav-link'>Cricketers</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/schedule' className='nav-link'>Schedule</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;