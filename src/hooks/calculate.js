import { useTotalHt, useFraisDeGestion, useMasseSalarialedisponibleHT, useSalaireBrut, useChargesPatronales, useChargesSalariales, useSalaireNetAvantImpôt, useSalaireNetImposable, useTotalReverse, useBonus, useReserveFinanciere } from "./formulat"; // Adjust the import path

const useCalculateResult = (formData) => {
    if (formData && formData.formType === 'montant') {
        return formData.value1 + formData.value2; // Change this calculation as needed
    } else if (formData && formData.formType === 'revenu') {
        const TarifjournalierHT = formData.TarifjournalierHT
        const Nbrjourstravaillés = formData.Nbrjourstravaillés
        const pourcentageRF = formData.PourcentageReservefinanciere
        const FraisPro = formData.Fraisprofessionnels
        const totalHt = useTotalHt(formData.TarifjournalierHT, formData.Nbrjourstravaillés);
        const ReserveFinanciere = useReserveFinanciere(totalHt, pourcentageRF)
        const fraisDeGestion = useFraisDeGestion(totalHt);
        const masseSalarialeDisponible = useMasseSalarialedisponibleHT(totalHt, formData.Fraisprofessionnels);
        const Bonus = useBonus(Nbrjourstravaillés).Bonus;
        const ChargesPatronales = useChargesPatronales(totalHt);
        const SalaireBrut = useSalaireBrut(masseSalarialeDisponible, ChargesPatronales);
        const ChargesSalariales = useChargesSalariales(totalHt);
        const SalaireNetImposable = useSalaireNetImposable(totalHt, ChargesSalariales, ChargesPatronales, Bonus);
        const SalaireNetAvantImpôt = useSalaireNetAvantImpôt(SalaireBrut, ChargesSalariales);
        const TotalReverse = useTotalReverse(SalaireNetAvantImpôt, FraisPro, ReserveFinanciere);

        return {
            TarifjournalierHT,
            Nbrjourstravaillés,
            totalHt,
            fraisDeGestion,
            FraisPro,
            masseSalarialeDisponible,
            SalaireBrut,
            ChargesPatronales,
            ChargesSalariales,
            SalaireNetImposable,
            SalaireNetAvantImpôt,
            ReserveFinanciere,
            Bonus,
            pourcentageRF,
            TotalReverse
        };
    } else {
        return 0;
    }
};

export default useCalculateResult;
