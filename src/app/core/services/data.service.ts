import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Child } from '../models/child.model';
import { Campaign } from '../models/campaing.model';

@Injectable({
  providedIn: 'root' // Isso diz ao Angular que o serviço é global e único.
})

export class DataService {

  // Simulando uma lista de crianças cadastradas.
  private mockChildren: Child[] = [
    {
      id: '1',
      name: 'Lucas Henrique Silva',
      birthDate: '2025-06-01', // Tem cerca de 1 ano (12 meses) em junho/2026
      photoUrl: 'assets/avatars/boy.png', // Caminho fictício para o avatar
      vaccineRecords: [
        {
          vaccineId: 'v1',
          vaccineName: 'BCG (Tuberculose)',
          status: 'APLICADA',
          dueDate: '2025-06-01',
          appliedDate: '2025-06-03' // Tomou logo após nascer (Cenário 1)
        },
        {
          vaccineId: 'v2',
          vaccineName: 'Hepatite B (1ª Dose)',
          status: 'APLICADA',
          dueDate: '2025-06-01',
          appliedDate: '2025-06-03'
        },
        {
          vaccineId: 'v3',
          vaccineName: 'Tríplice Viral (Sarampo, Caxumba, Rubéola)',
          status: 'ATRASADA', // Deveria tomar com 12 meses (Cenário 2)
          dueDate: '2026-06-01',
          // appliedDate fica vazio pois está atrasada e não foi aplicada
        }
      ]
    },
    {
      id: '2',
      name: 'Júlia Silva',
      birthDate: '2026-04-15', // Bebê de aproximadamente 2 meses
      photoUrl: 'assets/avatars/girl.png',
      vaccineRecords: [
        {
          vaccineId: 'v1',
          vaccineName: 'BCG (Tuberculose)',
          status: 'APLICADA',
          dueDate: '2026-04-15',
          appliedDate: '2026-04-17'
        },
        {
          vaccineId: 'v4',
          vaccineName: 'Pentavalente (1ª Dose)',
          status: 'PENDENTE', // Está na idade de tomar, mas ainda dentro do prazo tolerável
          dueDate: '2026-06-15'
        }
      ]
    }
  ];

  // Simulando campanhas de vacinação ativas (Atende ao Cenário 3)
  private mockCampaigns: Campaign[] = [
    {
      id: 'c1',
      title: 'Campanha Nacional de Multivacinação',
      description: 'Atualize a caderneta de vacinação do seu filho. Procure o posto de saúde mais próximo.',
      startDate: '2026-06-01',
      endDate: '2026-06-30',
      targetAgeMinMonths: 0,
      targetAgeMaxMonths: 60 // Crianças de até 5 anos
    }
  ];

  constructor() {}

  /**
   * Retorna a lista de todas as crianças do responsável
   * Usamos 'Observable' e 'of()' para simular o comportamento assíncrono de um banco de dados real.
   */
  getChildren(): Observable<Child[]> {
    return of(this.mockChildren);
  }

  /**
   * Retorna as campanhas de vacinação ativas
   */
  getCampaigns(): Observable<Campaign[]> {
    return of(this.mockCampaigns);
  }
}
