import { Component, Input, OnInit } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  public resultados!:any

  public parciais!: object

  @Input() hora:string = ''

  constructor(private requisicao:RequisicaoService) { }

  ngOnInit(): void {

    this.resultados = this.requisicao.getResultados(this.hora)


  }

  calculoParciais():void{

    let ideologia:string

    if(this.resultados.bandeira == 'Brasil'){

      ideologia = "Apelo ao nacionalismo político"

    }else{

      ideologia = "Publicação partidária"

    }

    if(this.resultados.tema == 'Violência'){


    }
  }

}
