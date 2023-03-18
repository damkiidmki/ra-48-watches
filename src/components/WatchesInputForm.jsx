import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

export default function WatchesInputFotm({ newWatches, handleAdd }) {
    const [form, setForm] = useState(
        { 
            id: nanoid(20),
            name: '',
            area: '' 
        }
    );
  
    useEffect(() => {
      if (newWatches) {
        setForm(
            { 
                name: newWatches.name,
                area: newWatches.area
            }
        );
      }
    }, [newWatches]);
  
    const handleSubmit = evt => {
        
        evt.preventDefault();
        const watches = {
            id: nanoid(20),
            name: form.name,
            area: form.area,
        };
        handleAdd(watches);
        setForm({ name: '', area: '' });
    };

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">                           
                    <div className="col-2">
                        <label htmlFor="date">Название</label>
                        <input 
                            className="form-control"
                            type="text" 
                            value={form.name}
                            name="name"
                            id="name"
                            required
                            onChange={onInputChange} 
                        />
                    </div>
                    <div className="col-2">
                        <label htmlFor="distance">Временная зона</label>
                        <input 
                            className="form-control"
                            type="number"
                            value={form.area}
                            name="area"
                            id="area"
                            required
                            onChange={onInputChange} 
                        />
                    </div>
                    <div className="col-2 d-flex align-content-end flex-wrap">
                        <button type="submit" className="btn btn-success">Добавить</button>
                    </div>
            </div>
        </div>
    </form>
    )
}
