import './Toolbar.css';
import Portfolio from './Portfolio';
import { useState } from 'react';

function Toolbar(props) {
    const filters = props.filters;    
    const data = props.data;
    const [selected, setSelected] = useState(props.selected);
    const onSelectFilterHandler = (filter) => {setSelected(filter.target.textContent)
        console.log(selected);
    };
    return (
        <>
            <div className="toolbar">
                <ul className="filter">
                    {filters.map(f => <li onClick={onSelectFilterHandler} className={selected === f ? "selected filter-item" : "filter-item"} key={f}>{f}</li>)}
                </ul>
            </div>
            <Portfolio data={data} selected={selected} />  
        </>
    )
}

export default Toolbar;