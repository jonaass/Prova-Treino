export default function Acai(Pequeno, Medio, Grande, Desconto) {
    let total = Pequeno * 13.50 + Medio * 15 + Grande * 17.50;
    let Desc = total*Desconto / 100;
    let resp = total-Desc;
    return('O total a ser pagar R$ ' + resp );
}