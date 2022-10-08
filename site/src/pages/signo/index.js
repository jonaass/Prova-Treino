import { useEffect, useState } from "react";
import Calcular from "../../service/signo";

export default function Signo() {
    const [Mes, SetMes] = useState ('');
    const [Dia, SetDia] = useState ('');
    const[Resultado, SetResultado] = useState('');

    function Libra() {
        try {
            let j = Calcular(Mes, Dia)
            SetResultado(j); 
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(()=> {
        Libra();
    }, [Mes, Dia])


    return(
        <main className='page-signo'>

            <div>
                <a href="/">Voltar</a>
            </div>
            
            <h1>Signo Libra</h1>

            <div>
                <h1>Mês</h1>
                <input type='tex' value={Mes} onChange={e => SetMes(e.target.value)} />
            </div>

            <div>
                <h1>Dia</h1>
                <input type='number' value={Dia} onChange={e => SetDia(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={Libra}>Calcular</button>
                <p>É do signo de Libra?{Resultado}</p> 
            </div>


        </main>
    );
}