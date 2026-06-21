// Defini o que é uma vacina generica
export interface Vaccine {
  id: string;
  name: string;
  description: string;
  targetAgeInMonths: number; // Com quantos meses a criança deve tomar a vacina
}

// Define o status de uma vacina especifica para uma criança
export type VaccineStatus = 'APLICADA' | 'PENDENTE' | 'ATRASADA';

export interface VaccinationRecord {
  vaccineId: string; // Referencia a vacina generica.
  vaccineName: string; // Nome da vacina para exibição~.
  status: VaccineStatus; // Status da vacina para a criança.
  dueDate: Date; // Data prevista para aplicação da vacina.
  applicationDate?: Date; // Data em que a vacina foi aplicada, se aplicável.
}
