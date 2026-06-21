import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Child } from '../models/child.model';
import { Campaign } from '../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mockChildren: Child[] = [
    {
      id: '1',
      name: 'Lucas Henrique Silva',
      birthDate: '2025-06-01',
      photoUrl: 'assets/avatars/boy.png',
      vaccineRecords: [
        {
          vaccineId: 'v1',
          vaccineName: 'BCG (Tuberculose)',
          status: 'APLICADA',
          dueDate: '2025-06-01',
          applicationDate: '2025-06-03'
        },
        {
          vaccineId: 'v2',
          vaccineName: 'Hepatite B (1ª Dose)',
          status: 'APLICADA',
          dueDate: '2025-06-01',
          applicationDate: '2025-06-03'
        },
        {
          vaccineId: 'v3',
          vaccineName: 'Tríplice Viral (Sarampo, Caxumba, Rubéola)',
          status: 'ATRASADA',
          dueDate: '2026-06-01',
          applicationDate: ''
        }
      ]
    },
    {
      id: '2',
      name: 'Júlia Silva',
      birthDate: '2026-04-15',
      photoUrl: 'assets/avatars/girl.png',
      vaccineRecords: [
        {
          vaccineId: 'v1',
          vaccineName: 'BCG (Tuberculose)',
          status: 'APLICADA',
          dueDate: '2026-04-15',
          applicationDate: '2026-04-17' // CORRIGIDO AQUI
        },
        {
          vaccineId: 'v4',
          vaccineName: 'Pentavalente (1ª Dose)',
          status: 'PENDENTE',
          dueDate: '2026-06-15',
          applicationDate: ''
        }
      ]
    }
  ];

  private mockCampaigns: Campaign[] = [
    {
      id: 'c1',
      title: 'Campanha Nacional de Multivacinação',
      description: 'Atualize a caderneta de vacinação do seu filho. Procure o posto de saúde mais próximo.',
      startDate: '2026-06-01',
      endDate: '2026-06-30',
      targetAgeMinMonths: 0,
      targetAgeMaxMonths: 60
    }
  ];

  constructor() {}

  getChildren(): Observable<Child[]> {
    return of(this.mockChildren);
  }

  getCampaigns(): Observable<Campaign[]> {
    return of(this.mockCampaigns);
  }
}
