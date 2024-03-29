import { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff");
    const [precolor, setPrecolor] = useState("");

    const ColorChange = (event) => {
        setPrecolor(color); 
        setColor(event.target.value); 
    }

    return (
        <div className="main--container">
            <h1 style={{color:precolor}}>Color Picker</h1>
            <div className="color--bg" style={{ background: color }}>
            </div>

            <div>
                <h2> Color: {color}</h2>
            </div>

            <div className="picker">
                <label htmlFor="colorpicker" className="text-pick">Pick a color</label>
                <input className="Color--picker" id="colorpicker" type="color" value={color} onChange={ColorChange} />
            </div>
        </div>
    );
}

export default ColorPicker;
