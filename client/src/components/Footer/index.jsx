import React from 'react';
import { useSelector } from 'react-redux';
import { Color } from 'grass-roots-react'; 

export default function(){

    const { wildCard } = useSelector(state => state.color);

    return (
        <footer style={{backgroundColor:wildCard, height:'5vh',textAlign:'center', position:'fixed', bottom:'0', width:'100%'}}>
            <small style={{fontSize:'15px', marginTop:'1vh', display:'inline-block', color: new Color(wildCard).getContrast() }}>made with <span role='img' aria-label='coffee emoji'>☕</span> by Wayne</small>
        </footer>
    )
}