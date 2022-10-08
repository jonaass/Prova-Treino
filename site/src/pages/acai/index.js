import './index.scss';
import { useEffect, useState } from "react";
import Calcular from '../../service/acai';

export default function Acai() {

    const [Pequeno, SetPequeno] = useState(0);
    const [Medio, SetMedio] = useState(0);
    const [Grande, SetGrande] = useState(0);
    const [Desconto, SetDesconto] = useState(0);
    const [Resposta, SetResposta] = useState(0);

    function Soma() {
        try {
            let i = Calcular(Pequeno, Medio, Grande, Desconto);
            SetResposta(i);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(()=> {
        Soma();
    },[Pequeno,Medio,Grande,Desconto])


    return (
        <main className='acai'>

            <div>
                <a href="/">Voltar</a>
            </div>


            <div>

                <h1>Quantidade de Pequeno</h1>
                <input type='number' value={Pequeno} onChange={e => SetPequeno(Number(e.target.value))} />

            </div>

            <div>
                <h1>Quantidade de Medio</h1>
                <input type='number' value={Medio} onChange={e => SetMedio(Number(e.target.value))} />
            </div>

            <div>
                <h1>Quantidade de Grande</h1>
                <input type='number' value={Grande} onChange={e => SetGrande(Number(e.target.value))} />
            </div>

            <div>
                <h1>Desconto</h1>
                <input type='number' value={Desconto} onChange={e => SetDesconto(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={Soma}>Calcular</button>

                <p>{Resposta}</p>
            </div>

        </main>
    );


}