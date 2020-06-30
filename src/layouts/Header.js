import React from 'react';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

import '../styles/Header.css'

const listImg = [img1, img2, img3, img4]
function Header(props) {
    let randomIndex = Math.floor(Math.random()*4)
    return (
        <img src={listImg[randomIndex]} alt='dmc-12'/>
    );
}

export default Header;