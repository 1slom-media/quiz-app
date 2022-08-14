import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import {BsInstagram,BsTelegram,BsGithub} from 'react-icons/bs'
import './header.scss';

export const Header=()=>{
    return(
        <Container>
            <div className="header">
                <Link to='/' className='header__logo'>
                    <span className="header__logo-title">1SLOMBEK</span>
                </Link>
                <div className="header__socials">
                    <a href="https://www.instagram.com" className='header__socials-link'><BsInstagram/></a>
                    <a href="https://t.me/IslomTagayev" className='header__socials-link'><BsTelegram/></a>
                    <a href="https://github.com/1slom-media" className='header__socials-link'><BsGithub/></a>
                </div>
            </div>
        </Container>
    )

}