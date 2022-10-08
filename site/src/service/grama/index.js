export default function Grama(grama) {
    let total = 0;
    let Resul = '';

    if (grama <= 0) {
        Resul = 'Peso inválido'
    }

    else if (grama >= 1000) {
        total = (grama / 100) * 3;
        Resul = 'O total a pagar é R$ ' + total;
    }

    else if (grama < 1000) {
        total = (grama / 100) * 3.5;
        Resul = 'O total a pagar é R$ ' + total;
    }

    else {
        Resul = 'Peso inválido'
    }

    return(Resul);
}