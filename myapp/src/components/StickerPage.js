import React, { useRef, useState, useEffect } from 'react';
import '../styles/StickerPage.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Draggable from 'react-draggable';


const StickerPage = ({ selfie, theme, Restart }) => {

    const sectionRef = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [stickers, setStickers] = useState([]);

    const importImages = (r) => {
        return r.keys().map(r);
    };

    const stickerSources = importImages(require.context('../../public/images/stickers', false, /\.(png|jpe?g|svg)$/));

    const handleDrop = (event) => {
        event.preventDefault();
        const stickerSrc = event.dataTransfer.getData('stickerSrc');
        const canvasRect = event.currentTarget.getBoundingClientRect();
        
        // Calculate position relative to the canvas
        const x = event.clientX - canvasRect.left;
        const y = event.clientY - canvasRect.top;
        
        const img = new Image();
        img.src = stickerSrc;
        img.onload = () => {
            // Add the new sticker to the array, adjusting by half the width and height
            setStickers((prevStickers) => [
                ...prevStickers,
                { src: stickerSrc, x: x - 50, y: y - 50 }
            ]);
        };
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const clear = () => {
        setStickers([])
    }
  
    const handleClose = () => {
        setShowPopup(false);
    };

    const screenshotAndPrint = async() => {
        console.log("hello")
        const screenshotElement = sectionRef.current;
        const canvas = await html2canvas(screenshotElement);
        const image = canvas.toDataURL('image/png');

        while (!image) {
            console.log('not image')
        }

        // Create a PDF and add the image to it
        // Use 'tabloid' for 11" x 17" format
        const tempPdf = new jsPDF({orientation: 'portrait', unit: 'in', format: 'tabloid'});
        const pdfWidth = tempPdf.internal.pageSize.getWidth();
        const pdfHeight = tempPdf.internal.pageSize.getHeight();
        tempPdf.addImage(image, 'PNG', 0, 0, pdfWidth, pdfHeight);
        const output = tempPdf.output('blob');
        const pdf = URL.createObjectURL(output);

        console.log('3')
        
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        iframe.src = pdf;

        document.body.appendChild(iframe);

        // Print the content of the iframe
        iframe.onload = () => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            
            // Clean up
            document.body.removeChild(iframe);
            URL.revokeObjectURL(pdf);
        };

        setTimeout(() => {setShowPopup(true)}, 1000);
    }

    return (
        <>
            <div className='sticker-page'>
                <div className='header'>
                    <h1>Customize With Stickers!</h1>
                </div>
                <div className='body'>
                    <div className='left-container'>
                        <div className='sticker-select'>
                            {stickerSources.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`sticker-${index}`}
                                    draggable
                                    onDragStart={(event) => event.dataTransfer.setData('stickerSrc', src)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='overlay-container' ref={sectionRef}>
                            {selfie ? (
                                <img className='final-selfie' src={selfie}></img>
                            ) : (() => {})}
                            {theme ? (
                                <img className='final-theme' src={theme}></img>
                            ) : (() => {})}
                            <div className='sticker-canvas' onDrop={handleDrop} onDragOver={handleDragOver}>
                                    {stickers.map((sticker, index) => (
                                        <Draggable onMouseDown={(e) => {e.preventDefault()}}>
                                            <img key={index} src={sticker.src} alt={`sticker-${index}`}style={{left: sticker.x,top: sticker.y,}} />
                                        </Draggable>
                                    ))}
                            </div>
                        </div>
                        <button className='button pink clear' onClick={clear}>Clear</button>
                        <button className='button green print' onClick={screenshotAndPrint}>Print</button>
                    </div>
                </div>
                {showPopup && (
                    <div className="popup">
                        <div className='opacity'/>
                        <div className='form'>
                            <IoIosCloseCircleOutline className='close' onClick={handleClose}/>
                            {/* <h3>Email not working, leave empty</h3>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="email (optional)"
                            /> */}
                            <button className='button green restart' onClick={Restart}>Restart</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default StickerPage;