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
        strong: "Dev Mobile - Residência Tecnológica",
        p: "Flutter"
      },
      text: '<p>Na residência tecnológica GrowUp, fomos incumbidos pelo representante da renomada empresa Accenture de desenvolver um aplicativo mobile utilizando a avançada framework Flutter. Com determinação e colaboração, minha equipe e eu concebemos uma solução inovadora voltada para auxiliar os residentes de Recife. Como resultado, conseguimos desenvolver um aplicativo com foco em doações.</p>'
    },
    {
      sumary: {
        strong: "Dev Front-End - Residência Tecnológica",
        p: "HTML, CSS, Javascript"
      },
      text: '<p>Na residência de software RiseUp, eu e meu squad recebemos por desafio da Accenture desenvolver uma plataforma on-line de gerenciamento de estoque, para que fosse possível acessar de qualquer lugar a quantidade de produtos disponíveis, pesquisar um produto específico para obter suas informações, cadastrar novos produtos e/ou editar.</p>'
    }
  ])
}
