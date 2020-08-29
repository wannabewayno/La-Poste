import React, { useRef, cloneElement } from 'react';

export default function({ children, duration='500ms', style={} }){

    const halfDuration = Number(duration.match(/\d+/g)[0])/2;

    const turnTableRef = useRef();
    const displayInitialRef = useRef();
    const displayOnFlipRef = useRef();

    // just the way I defined this, last element is the call-to-action that flips everything.
    const flipButton = cloneElement(children[2],{ onClick:handleFlip })

    // when called, triggers a flip animation
    function handleFlip(){
        // if this is hidden, we show it and hide the other one
        if(displayOnFlipRef.current.style.display === 'none') {
            turnTableRef.current.style.transform = 'rotateX(180deg)';
            setTimeout(() => {
                displayOnFlipRef.current.style.display = 'block';
                displayInitialRef.current.style.display = 'none';
            }, halfDuration);
            
        } else { // otherwise we do the opposite
            turnTableRef.current.style.transform = 'rotateX(0deg)'
            setTimeout(() => {
                displayOnFlipRef.current.style.display = 'none';
                displayInitialRef.current.style.display = 'block';
            }, halfDuration);
           
        }
    }


    return (
        <div style={{...style}}>
            {/* // this div flips 180° and we swap the content at 90° */}
            <div ref={turnTableRef} style={{transition:`all ${duration} ease-in-out`}}>
                <div ref={displayInitialRef} style={{display:'block',}}>
                    {children[0]}
                </div>
                <div ref={displayOnFlipRef} style={{display:'none', transform:'rotateX(180deg)'}}>
                    {children[1]}
                </div>
            </div>
            {/* this is the call to action that triggers flipping */}
            {flipButton}
        </div>
    )
}