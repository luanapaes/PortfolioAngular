import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectComponent } from '../../dialog/dialog-project/dialog-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/crud-project.png',
      alt: 'Projeto CRUD',
      title: 'Projeto CRUD',
      width: '100px',
      height: '51px',
      description: '<p>Este projeto Angular foi desenvolvido para realizar operações básicas de gerenciamento de usuários, incluindo cadastro, edição, exclusão e visualização de informações.</p>',
      links: [
        {
          name: 'Veja o código no Github',
          href:  'https://github.com/luanapaes/angular-cadastro'
        }
      ]
    },
    {
      src: 'assets/img/projects/fit-project.png',
      alt: 'Projeto FitInsight',
      title: 'Projeto FitInsight',
      width: '100px',
      height: '51px',
      description: '<p>Desenvolvi um sistema para atender às necessidades de redes de academia. Utilizando uma IA para prever a frequência dos alunos, proporcionando maior controle sobre os alunos pela academia, utilizando no frontend HTML, CSS, e Javascript, Python no desenvolvimento da IA e Django no backend.</p>',
      links: [
        {
          name: 'Veja o código no Github',
          href:  'https://github.com/luanapaes/FitInsights/'
        }
      ]
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
