import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../Redux/actions/authActions';

import Header from '../components/header';
import Banner from '../components/banner';
import Features from '../components/features';
import Footer from '../components/footer';
import chatIcon from '../../back/designs/img/icon-chat.webp';
import moneyIcon from '../../back/designs/img/icon-money.webp';
import securityIcon from '../../back/designs/img/icon-security.webp';
import '../scss/style.scss'

const featuresList = [
    {
    id: 1,
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    icon: chatIcon,
    },
    {
    id: 2,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
    icon: moneyIcon,
    },
    {
    id: 3,
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
    icon: securityIcon,
    },
];

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <Banner/>
            <div>
                <Features featuresList={featuresList}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
