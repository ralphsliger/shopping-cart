import React, { Component } from 'react'
import React, { Component } from 'react'
import { DragSource } from 'react-dnd';import { ItemTypes } from './Constants';


let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

// phone DnD spec
const phoneSpec = {
    beginDrag(props) {
        console.log("begin drag")
        return {
            name: props.brand

        }
    },
    endDrag(props, monitor, component) {
        if (monitor.didDrop()) {
            const dragItem = monitor.getItem(); // from beginDrag
            const dropResult = monitor.getDropResult();
            // Move action goes here
            console.log("You dropped ", dragItem.name, ' into ' + dropResult.name)
        } else {
            return;
        }
    }
}
class Phone extends Component{
    render()
    {
    const { name } = this.props;
    return(
        <div className='phone'>
            { name }
        </div>
        )
    }
    }export default Phone