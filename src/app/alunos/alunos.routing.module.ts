import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';

const alunosRoutes = [
    {
        path: '', 
        component: AlunosComponent,
        canActivateChild: [AlunosGuard], 
        children: [
            {path: 'novo', component: AlunoFormComponent},
            {path: ':id', component: AlunoDetalhesComponent},
            {path: ':id/editar', component: AlunoFormComponent},
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(alunosRoutes)
    ],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}