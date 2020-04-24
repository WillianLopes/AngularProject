import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: any;
  constructor(private route: ActivatedRoute, private alunoService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
        this.id = params['id'];

        this.aluno = this.alunoService.getAluno(this.id);

        if(this.aluno == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
