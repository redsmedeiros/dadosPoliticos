import { Component, ElementRef, OnInit, ViewChild, OnChanges } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public nome!:string

  public partido!:string

  public ideologia:any

  public genero:any

  public raca:any

  public redes:any



  public dados = {}

  constructor(private requisicao: RequisicaoService) { }

  ngOnInit(): void {


  }


  enviar(){

    this.dados = {
      nome: this.nome,
      partido: this.partido,
      ideologia: this.ideologia,
      genero: this.genero,
      raca: this.raca,
      redes: this.redes
    }

    const dados = JSON.stringify(this.dados)

    this.requisicao.save(dados)

  }


}
