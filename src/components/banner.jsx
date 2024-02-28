import * as React from 'react';
import banner_img from '../../back/designs/img/bank-tree.jpeg';
// import '../scss/components/_banner.scss';
// import '../scss/style.scss'

function Banner() {
    return (
        <div className="banner">
            <img className="banner_img" src={banner_img} alt="banner image" />
        </div>
    );
}

export default Banner;