import WatchesInputFotm from './WatchesInputForm';
import React, { useState, useEffect } from 'react';
import WatchesList from './WatchesList';
import { nanoid } from 'nanoid';

export default function WatchesSettings() {
    const [watches, setRows] = useState([]);
    const newWatches = {
        id: nanoid(20),
        name: 'Москва',
        area: '3'
    };
  
    const handleDelete = (id) => {
        setRows(watches =>
            watches.filter(item => item.id !== id)
        );
    };
  
    const handleAdd = newWatches => {
        setRows(watches => {return [...watches,newWatches]});
    };

    return(
        <>
            <WatchesInputFotm
                handleAdd={handleAdd}
                newWatches={newWatches}
            />
            <WatchesList
                watches={watches}
                handleDelete={handleDelete}
            />
        </>
    )
};
