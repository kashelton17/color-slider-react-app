import ColorSlider from '../../components/slider/ColorSlider'
import RGB from './RGB'
import React, { useState } from 'react';


export default function ColorBrowser() {
    const [ colors, setColors ] = useState({
        red: 55,
        green: 150,
        blue: 25
    })

    const updateColor = (name, value) => {
        setColors({...colors, [name]: value})
    }

    return (
        <div className='slider-rgb'>
            <div className='slider-div'>
                <ColorSlider name="red" updateColor={updateColor} value={colors.red}/>
                <ColorSlider name="green" updateColor={updateColor} value={colors.green}/>
                <ColorSlider name="blue" updateColor={updateColor} value={colors.blue}/>
            </div>
            <div>
                <RGB colors={colors}/>
            </div>
        </div>
    )
}