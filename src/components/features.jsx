import React, { useState, useEffect } from 'react'; 
import chatIcon from '../../back/designs/img/icon-chat.png';
import moneyIcon from '../../back/designs/img/icon-money.png';
import securityIcon from '../../back/designs/img/icon-security.png';
import Footer from '../components/footer';
import '../scss/pages/_home.scss'
import '../scss/style.scss'

function Features() {
    return (
        <section className="features">
            <div className="feature-item">
                <img src={chatIcon} alt="chat icon" className="feature-icon" />
                <h3 className="feature-item-title">You are our #1 priority</h3>
                <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
            </div>

            <div className="feature-item">
                <img src={moneyIcon} alt="money icon" className="feature-icon" />
                <h3 className="feature-item-title">More savings means higher rates</h3>
                <p>The more you save with us, the higher your interest rate will be!</p>
            </div>

            <div className="feature-item">
                <img src={securityIcon} alt="security icon" className="feature-icon" /> 
                <h3 className="feature-item-title">Security you can trust</h3>
                <p>We use top of the line encryption to make sure your data and money is always safe.</p>
                </div>
        </section>
    );
}
    
    
    export default Features;
