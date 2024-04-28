import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      sumary: {
        strong: "Projeto CRUD",
        p: "Angular + Spring Boot"
      },
      text: '<p> Desenvolvi um sistema de gerenciamento de de usuários utilizando Angular no frontend e Spring Boot no backend.</p>'
    },
    {
      sumary: {
        strong: "FitInsight",
        p: "HTML, CSS, Javascript, Python e Django"
      },
      text: '<p>Junto aos meus colegas da faculdade desenvolvi um sistema para atender às necessidades de redes de academia. Utilizando uma IA para prever a frequência dos alunos, proporcionando maior controle sobre os alunos pela academia, utilizando no frontend HTML, CSS, e Javascript, Python no desenvolvimento da IA e Django no backend.</p>'
    },
    {
      sumary: {
        strong: "IDE de Fluxograma",
        p: "HTML, CSS e Javascript"
      },
      text: 'Desenvolvi o frontend para uma IDE de fluxograma como parte de um projeto de extensão na faculdade.A IDE foi projetada para auxiliar estudantes iniciantes em programação.</p>'
    }
  ])
}
