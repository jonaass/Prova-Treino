import { useEffect, useState } from 'react';
import './index.scss';
import Peso from '../../service/grama';

export default function Grama() {
    const [Grama, SetGrama] = useState();
    const [Resultado, SetResultado] = useState('');

    function Calcular() {
        try {
            let j = Peso (Grama);
            SetResultado(j);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(()=>{
        Calcular()
    }, [Grama])

    return (
        <main className='page-grama'>

            <div>
                <a href="/">Voltar</a>
            </div>

            <div>
                <h1>Informa a Grama</h1>
                <input type="text" value={Grama} onChange={e => SetGrama(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={Calcular}>Calcular</button>
                <p>{Resultado}</p>
            </div>


        </main>
    );
}