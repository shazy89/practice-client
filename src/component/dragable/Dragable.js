import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import Button from '@material-ui/core/Button'


const Dragable = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
     const [rect, setRect] = useState({ width: 200, height: 200, x: 200, y: 200, rotate: 0 })

    const trackPos = (data) => {
        console.log(data)
        setPosition({ x: data.x, y: data.y });
     };
    
    return (
    <div>
<Draggable   axis='y'>
   <Button>axis=”y”: the component can only be dragged vertically.</Button>
 
</Draggable>
<Draggable   axis='x'>
   <Button>axis=”x”: the component can only be dragged vertically.</Button>
</Draggable>
</div>
 
    )
}
export default Dragable ;