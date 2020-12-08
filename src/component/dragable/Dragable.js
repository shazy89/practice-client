import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import Button from '@material-ui/core/Button'
import DragableCard from './DragableCard'




const Dragable = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    
     const [rect, setRect] = useState({ width: 200, height: 200, x: 200, y: 200, rotate: 0 })

    const trackPos = (data) => {
    
        setPosition({ x: data.x, y: data.y });
     };
    
    return (
    <div>
<Draggable   axis='y' >
   <Button>axis=”y”: the component can only be dragged vertically.</Button>
 
</Draggable>
<Draggable   axis='x'>
   <Button>axis=”x”: the component can only be dragged vertically.</Button>
</Draggable>
<Draggable onDrag={(e, data) => trackPos(data)}>
   <div className="box">
       <Button>Here's my position...</Button>
       <div>
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
       </div>
   </div>
</Draggable>
<Draggable handle="strong" >
          <div className="box no-cursor">
            <strong  style={{cursor: 'grabbing'}}><div>Drag here</div></strong>
            <Button>You must click my handle to drag me</Button>
          </div>
</Draggable>

<div style={{height: '500px', width: '800px', position: 'relative', overflow: 'auto', padding: '0', marginLeft: '100px'}}>
<div style={{height: '1000px', width: '1000px', padding: '10px'}}>

    <DragableCard />

   < DragableCard />

 </div>
</div>

  
 
</div>
 
    )
}
export default Dragable ;