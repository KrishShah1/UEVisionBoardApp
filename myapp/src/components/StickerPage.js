import React, { useRef, useState, useEffect } from 'react';
import '../styles/StickerPage.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Draggable from 'react-draggable';


const StickerPage = ({ selfie, theme, Restart }) => {

    const sectionRef = useRef();
    const [pdf, setPdf] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showRestart, setShowRestart] = useState(false);
    const [email, setEmail] = useState('');
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
            const imgWidth = img.width;
            const imgHeight = img.height;

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
    
    const screenshotAndPopup = async() => {
        const screenshotElement = sectionRef.current;
        const canvas = await html2canvas(screenshotElement);
        const image = canvas.toDataURL('image/png');

        // Create a PDF and add the image to it
        // Use 'tabloid' for 11" x 17" format
        const tempPdf = new jsPDF({orientation: 'portrait', unit: 'in', format: 'tabloid'});
        const pdfWidth = tempPdf.internal.pageSize.getWidth();
        const pdfHeight = tempPdf.internal.pageSize.getHeight();
        tempPdf.addImage(image, 'PNG', 0, 0, pdfWidth, pdfHeight);
        const output = tempPdf.output('blob');
        const pdfUrl = URL.createObjectURL(output);
        setPdf(pdfUrl);

        setShowPopup(true);
    }

    const PrintAndEmail = async() => {
        if (email) {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('file', pdf, 'document.png');
        
            try {
                const response = await fetch('/send-email', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    alert('Email sent successfully!');
                } else {
                    alert('Failed to send email.');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('An error occurred while sending the email.');
            }   
        }

        if (pdf) {
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
        }

        setTimeout(() => {setShowRestart(true)}, 2000);
    }

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        <>
            {/* <DndProvider backend={HTML5Backend}>             */}
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
                                ) : (
                                    console.log("error loading selfie")
                                )}
                                {theme ? (
                                    <img className='final-theme' src={theme}></img>
                                ) : (
                                    console.log("error loading theme")
                                )}
                                <div className='sticker-canvas' onDrop={handleDrop} onDragOver={handleDragOver}>
                                        {stickers.map((sticker, index) => (
                                            <Draggable onMouseDown={(e) => {e.preventDefault()}}>
                                                <img key={index} src={sticker.src} alt={`sticker-${index}`}style={{left: sticker.x,top: sticker.y,}} />
                                            </Draggable>
                                        ))}
                                </div>
                            </div>
                            <button className='button pink clear' onClick={clear}>Clear</button>
                            <button className='button green finish' onClick={screenshotAndPopup}>Finish</button>
                        </div>
                    </div>
                    {showPopup && (
                        <div className="popup">
                            <div className='opacity'/>
                            <div className='form'>
                                <IoIosCloseCircleOutline className='close' onClick={handleClose}/>
                                <h3>Email not working, leave empty</h3>
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="email (optional)"
                                />
                                <button className='button green print' onClick={PrintAndEmail}>Print</button>
                                {showRestart && (
                                    <button className='button green restart' onClick={Restart}>Restart</button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            {/* </DndProvider> */}
        </>
    );
};

export default StickerPage;