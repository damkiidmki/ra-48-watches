import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { nanoid } from 'nanoid';

export default function Watches(props) {
    const {item, handleDelete} = props
    const [time, setTime] = useState(moment().utcOffset(item.area * 60).format('HH:mm:ss'))
    
    const componentDidMount = () => {
        var interval = setInterval(() => newTime() , 1000)
        return () => clearInterval(interval)
    }

    const newTime = () => {
        setTime(moment().utcOffset(item.area * 60).format('HH:mm:ss'));
    }

    useEffect(componentDidMount, [])

    return(
        <div key={nanoid(20)}>
            <h2>{item.name}</h2>
            <h5>{time}</h5>
            <button type="submit" className="btn btn-danger" onClick={handleDelete}>х</button>
        </div>
    )
}
