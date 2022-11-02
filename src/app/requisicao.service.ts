import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor() { }

  save(dados: string){

    localStorage.setItem("dados", dados)

  }

  getDados(){

    const dadosJson = localStorage.getItem('dados')

    return dadosJson ? JSON.parse(dadosJson) : "Sem Dados"

  }

  saveResultados(resultado: string, hora: string){

    localStorage.setItem(hora, resultado)

  }

  getResultados(hora:string){

    const dadosJson = localStorage.getItem(hora)

    return dadosJson ? JSON.parse(dadosJson) : "Sem Dados"

  }
}
