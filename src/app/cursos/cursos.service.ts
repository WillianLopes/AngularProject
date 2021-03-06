import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular 9'},
      {id: 2, nome: '.NET Core'}
    ];
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for(let i=0; i<cursos.length; i++){
      let curso = cursos[i];
      if(curso.id == id){
        return curso;
      }
    }

    return null;
  }
}
