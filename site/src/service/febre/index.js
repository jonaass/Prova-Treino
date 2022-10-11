export default function Febre(febre) {
    let Resp = '';

    if (febre >= 41) {
        Resp = 'Hiportemia';
    }

    else if (febre >=39.6 && febre <= 41 ) {
        Resp = 'Febre alta';
    }

    else if (febre >= 37.6 && febre <= 39.6) {
        Resp ='Febre';
    }

    else if (febre >=36 && febre <=37.6) {
        Resp ='Normal'
    }

    else if (febre < 36) {
        Resp= 'Hiportemia'
    }

    return Resp;



}