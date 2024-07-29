import React, { useRef, useState, useEffect } from 'react';
import '../styles/StickerPage.css';

const StickerPage = ({ selfie, theme, Restart }) => {

    // useEffect(() => {
    //     console.log(Selfie)
    //     console.log(Theme)
    // }, [])

    const clear = () => {

    }
    
    const print = () => {

    }

    return (
    <div className='sticker-page'>
        <div className='header'>
        <h1>Customize With Stickers!</h1>
        </div>
        <div className='body'>
        <div className='left-container'>
            <div className='sticker-select'>              
                <img className='sticker1' src='/images/sticker1.png' alt='sticker1'></img>
                <img className='sticker2' src='/images/sticker2.png' alt='sticker2'></img>
                <img className='sticker3' src='/images/sticker3.png' alt='sticker3'></img>
                <img className='sticker4' src='/images/sticker4.png' alt='sticker4'></img>
                <img className='sticker5' src='/images/sticker5.png' alt='sticker5'></img>
                <img className='sticker6' src='/images/sticker6.png' alt='sticker6'></img>
                <img className='sticker7' src='/images/sticker1.png' alt='sticker7'></img>
                <img className='sticker8' src='/images/sticker2.png' alt='sticker8'></img>
                <img className='sticker9' src='/images/sticker3.png' alt='sticker9'></img>
                <img className='sticker10' src='/images/sticker4.png' alt='sticker10'></img>
                <img className='sticker11' src='/images/sticker5.png' alt='sticker11'></img>
                <img className='sticker12' src='/images/sticker6.png' alt='sticker12'></img>
                <img className='sticker13' src='/images/sticker1.png' alt='sticker13'></img>
                <img className='sticker14' src='/images/sticker2.png' alt='sticker14'></img>
                <img className='sticker15' src='/images/sticker3.png' alt='sticker15'></img>
                <img className='sticker16' src='/images/sticker4.png' alt='sticker16'></img>
                <img className='sticker17' src='/images/sticker5.png' alt='sticker17'></img>
                <img className='sticker18' src='/images/sticker6.png' alt='sticker18'></img>
                <img className='sticker19' src='/images/sticker1.png' alt='sticker19'></img>
                <img className='sticker20' src='/images/sticker2.png' alt='sticker20'></img>
                <img className='sticker21' src='/images/sticker3.png' alt='sticker21'></img>
                <img className='sticker22' src='/images/sticker4.png' alt='sticker22'></img>
                <img className='sticker23' src='/images/sticker5.png' alt='sticker23'></img>
                <img className='sticker24' src='/images/sticker6.png' alt='sticker24'></img>
                <img className='sticker25' src='/images/sticker1.png' alt='sticker25'></img>
                <img className='sticker26' src='/images/sticker2.png' alt='sticker26'></img>
                <img className='sticker27' src='/images/sticker3.png' alt='sticker27'></img>
                <img className='sticker28' src='/images/sticker4.png' alt='sticker28'></img>
                <img className='sticker29' src='/images/sticker5.png' alt='sticker29'></img>
                <img className='sticker30' src='/images/sticker6.png' alt='sticker30'></img>
            </div>
        </div>
        <div className='right-container'>
            <div className='overlay-container'>
                {selfie ? (
                    <img className='final-selfie' src={selfie}></img>
                ) : (
                    console.log("error loading selfie")
                )}
                {theme ? (
                    <img className='final-theme' src={theme}></img>
                ) : (
                    console.log("error loading theme")
                )}
            </div>
            <button className='side clear' onClick={clear}>Clear</button>
            <button className='side print' onClick={Restart}>Print</button>
        </div>
        </div>
    </div>
    );
};

export default StickerPage;