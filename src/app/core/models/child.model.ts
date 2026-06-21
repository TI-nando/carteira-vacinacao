import { VaccinationRecord } from './vaccine.model';

export interface Child {
  id: number;
  name: string;
  birthDate: Date; // Formato ISO: YYYY-MM-DD
  photoUrl: string; // Avatar para ilustrar
  vaccineRecords: VaccinationRecord[]; // Caderno de vacina individual da criança
}
