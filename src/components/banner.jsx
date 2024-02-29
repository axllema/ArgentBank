import * as React from 'react';
import banner_img from '../../back/designs/img/bank-tree.jpeg';
import '../scss/components/_banner.scss';
import '../scss/style.scss'

function Banner() {
    return (
        <div className="hero">
        {/* <img src={banner_img} alt="banner image" /> */}
        <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
    </div>
    );
}



export default Banner;