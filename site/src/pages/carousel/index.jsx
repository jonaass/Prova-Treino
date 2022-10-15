import './styles.scss';
import Carousel from 'react-elastic-carousel';
import Item from './Item.js';
import { useState } from 'react';



function CArousel() {
    const breakPoints = [
    { width: 1, itemToShow: 1 },
    {width :550, itemToShow: 2, itemToScroll: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 },
    ]

    const [ITem, Setitem] = useState([1,2,3,4,5,6]);

    const addItem = () => {
        const nextItem = Math.max(1, ITem.length + 1)
        Setitem([...ITem,nextItem])
    }

    const removeItem = () =>{
        const endRange = Math.max(0 , ITem.length, - 1)
        Setitem(ITem.slice(0, endRange))
    }

    return (
        <div className="container">
            <div className="controls-wrapper">
                <button onClick={addItem}>Adiciona</button>
                <button onClick={removeItem}>Remover</button>
            </div>
            <hr className="seperator" />
            <div className='carousel-wreapper'>
                <Carousel isRTL breakPoints={breakPoints}>
                {ITem.map((item) =>(
                    <Item key={item}>{item}</Item>
                ))}
                </Carousel>
            </div>
        </div>
    );

}

export default CArousel