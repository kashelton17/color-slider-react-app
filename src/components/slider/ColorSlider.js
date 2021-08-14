export default function ColorSlider({ name, updateColor, value }) {
    return (
        <div>
            <span id={name}>{name}</span>
            <input 
                className='slider' 
                type='range' 
                min='1' 
                max='255' 
                onChange={(event) => updateColor(name, event.target.value)}
            />
            <span>{value}</span>
        </div>
    )
}

{/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> */}
