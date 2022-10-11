import './index.scss';
import {  useEffect, useState } from 'react';
import Calcular from '../../service/febre';

export default function Febre() {
    const [Febre, SetFebre] = useState(0);
    const [Resp, SetResp] = useState('');

    function soma() {
        try {
            let j = Calcular(Febre);
            SetResp(j);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(()=>{
        Calcular()
    }, [Febre])

    return (
        <main>

            <h1>Febre</h1>

            <p>temperatura</p>
            <input type="text" value={Febre} onChange={e => SetFebre(Number(e.target.value))} />

            <button onClick={soma}>Saber</button>

            <p>A situação para a sua temperatura é {Resp} </p>
        </main>
    );

}
