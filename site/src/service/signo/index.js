export default function Signo(Mes, Dia) {
    let Resul = '';


     if (Mes === 'Setembro' && Dia < 23) {
        Resul = 'Não'
    }

    else if (Mes === 'Outubro' && Dia > 22) {
        Resul = 'Não'
    }

    else if (Dia > 31 || Dia < 1) {
        Resul = 'Data Inválida'
    }


    else if (Dia <= 22 && Mes ==='Outubro') {
        Resul = 'Sim';
    }

    else if (Dia >= 23 && Mes === 'Setembro') {
        Resul = 'Sim';
    }

    else {
        Resul = 'Data Inválida'
    }

    return Resul;

}