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

    const handlePrint = () => {
        const elementToPrint = document.getElementById('elementToPrint'); // Element to be printed
      
        // Ensure the element exists before proceeding
        if (elementToPrint) {
          html2canvas(elementToPrint, {
            scale: 2, // Increase resolution
            useCORS: true, // Handle cross-origin content
          }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png'); // Convert canvas to an image
      
            const pdf = new jsPDF('p', 'pt', 'tabloid'); // Create a PDF (portrait, tabloid size)
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); // Add the image to the PDF
      
            // Open print dialog after ensuring PDF content is loaded
            pdf.autoPrint(); 
            window.open(pdf.output('bloburl')); // This line opens the print dialog
      
            // Optional: Save the PDF
            // pdf.save('screenshot.pdf');
          }).catch((err) => {
            console.error('Error generating canvas or PDF:', err);
          });
        } else {
          console.error('Element to print not found');
        }
      }

      const screenshotAndPrint = async () => {
        const screenshotElement = sectionRef.current;
    
        // Capture the element as a canvas
        const canvas = await html2canvas(screenshotElement);
        const image = canvas.toDataURL('image/png');
    
        // Create a PDF and add the image to it
        const tempPdf = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: 'tabloid' // 11" x 17" format
        });
    
        const pdfWidth = tempPdf.internal.pageSize.getWidth();
        const pdfHeight = tempPdf.internal.pageSize.getHeight();
        tempPdf.addImage(image, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
        // Output the PDF as a blob
        const blob = await tempPdf.output('blob');
    
        // Create an object URL for the blob
        const pdfUrl = URL.createObjectURL(blob);
    
        // Create an invisible iframe
        let iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.top = '-10000px'; // Move it far out of view
        document.body.appendChild(iframe);
    
        iframe.onload = () => {
            // Wait until the iframe is fully loaded before printing
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
    
            // Clean up: remove the iframe and revoke the object URL
            document.body.removeChild(iframe);
            URL.revokeObjectURL(pdfUrl);
        };
    
        // Write the PDF content to the iframe's document
        iframe.src = pdfUrl; // This ensures the PDF is correctly loaded into the iframe
    };

        // setTimeout(() => {setShowPopup(true)}, 1000);


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