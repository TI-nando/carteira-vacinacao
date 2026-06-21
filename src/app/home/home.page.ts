import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para usar *ngIf e *ngFor
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonSegment, IonSegmentButton, IonLabel, IonAvatar,
  IonCard, IonItem, IonList, IonBadge, IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { checkmarkCircle, time, warning } from 'ionicons/icons';

import { DataService } from '../core/services/data.service';
import { Child } from '../core/models/child.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonSegment, IonSegmentButton, IonLabel, IonAvatar,
    IonCard, IonItem, IonList, IonBadge, IonIcon
  ],
})
export class HomePage implements OnInit {
  // Guarda a lista de todas as crianças
  children: Child[] = [];

  // Guarda qual criança está selecionada no momento
  selectedChild: Child | null = null;

  // Injetamos o serviço de dados no construtor
  constructor(private dataService: DataService) {
    addIcons({ checkmarkCircle, time, warning });
  }

  // Esse método roda automaticamente assim que a página é carregada
  ngOnInit() {
    this.dataService.getChildren().subscribe((data) => {
      this.children = data;
      if (this.children.length > 0) {
        this.selectedChild = this.children[0];
      }
    });
  }

  // Método chamado quando clicamos na aba de outro filho (Júlia)
  selectChild(child: Child) {
    this.selectedChild = child;
  }
}
