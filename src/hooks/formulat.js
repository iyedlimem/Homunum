const useTotalHt = (TarifjournalierHT, Nbrjourstravaillés) => {
    return (Math.round(TarifjournalierHT * Nbrjourstravaillés));
};

const useFraisDeGestion = (TotalHt) => {
    return (Math.round(TotalHt * 0.05))
};

const useMasseSalarialedisponibleHT = (TotalHt, FraisPro) => {
    return (Math.round((TotalHt * 0.95) - FraisPro));
};

const useChargesPatronales = (TotalHt) => {
    return (Math.round(TotalHt * 0.29))

}
const useChargesSalariales = (TotalHt) => {
    return (Math.round(TotalHt * 0.12))

}
const useSalaireBrut = (MasseSalarialedisponibleHT, ChargesPatronales) => {
    return (Math.round(MasseSalarialedisponibleHT - ChargesPatronales))
}
const useSalaireNetImposable = (TotalHt, ChargesSalariales, ChargesPatronales, Bonus) => {
    return (Math.round((TotalHt - ChargesSalariales - ChargesPatronales) + Bonus))
}

const useSalaireNetAvantImpôt = (SalaireBrut, ChargesSalariales) => {
    return (Math.round(SalaireBrut - ChargesSalariales))
}
const useTotalReverse = (SalaireNetAvantImpôt, FraisPro, ReserveFinanciere) => {
    return (Math.round((SalaireNetAvantImpôt + FraisPro) - ReserveFinanciere))
}
const useBonus = (Nbrjourstravaillés) => {
    const Resto = Nbrjourstravaillés * 8;
    const Mutuelle = 33;
    const transport = 42;
    const Bonus = Resto + Mutuelle + transport;
    return {
        Resto,
        Mutuelle,
        transport,
        Bonus
    }
}
const useReserveFinanciere = (TotalHt, PourcentageReservefinanciere) => {
    return (TotalHt * (PourcentageReservefinanciere / 100))
}

export {
    useTotalHt,
    useFraisDeGestion,
    useMasseSalarialedisponibleHT,
    useSalaireBrut,
    useChargesPatronales,
    useChargesSalariales,
    useSalaireNetImposable,
    useSalaireNetAvantImpôt,
    useTotalReverse,
    useBonus,
    useReserveFinanciere
};
