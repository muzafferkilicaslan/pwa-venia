/* src/components/GreetingPage/greetingPage.js */

import React from 'react';
import { useParams } from 'react-router-dom';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './greetingPage.module.css';

const GreetingPage = () => {
    const classes = useStyle(defaultClasses);
    return (
        <div>
            <h1 className={classes.greeting}>Hello my connections!</h1>
            <h1 className={classes.greeting_icon}>{'\uD83D\uDC4B'}</h1>
            <p className={classes.greeting}>I'm started to development on PWA.</p>
            <p className={classes.greetingPage}>Muzaffer Kılıçaslan</p>
        </div>
    );
};

export default GreetingPage;
