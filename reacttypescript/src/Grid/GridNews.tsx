
import React from 'react';
import News from '../News/News';

interface GridNewsProps {
    items: any[];
}

const GridNews: React.FC<GridNewsProps> = ({ items }) => {
    return (
        <div> 
            {items.map((item, i) => (
                <News key={i} item={item}/>
            ))}
        </div>
    );
}


export default GridNews