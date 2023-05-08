import './Portfolio.css'

function Portfolio(props) {
    const data = props.data;
    const selected = props.selected;
    let newdata = data.filter(d => d.category === selected);
    if (newdata.length === 0) {
        newdata = data;
    }

    let id=1;
    return (
        <div className={newdata.length < 3 ? "height1000 + portfolio" : "height2000 + portfolio"}>
            {
                newdata.map(p => 
                    <div key={id++} className="image">
                        <img  src={p.img} alt="nodescript" data-category={p.category} />
                    </div>
                )
            }
        </div>
    )
}

export default Portfolio;