import { RequisicaoService } from './../requisicao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {

  public dados!:any

  public data!:string

  public hora!:string

  public imagem!: string

  public proximaImagem: boolean = false

  public bandeira!: string

  public tema!: string

  public fakenews!: string

  public curtidas!: number

  public comentarios!: number

  public resultado!: object

  public flag: boolean = false

  constructor(private requisicao: RequisicaoService) { }

  ngOnInit(): void {

    this.dados = this.requisicao.getDados()

  }

  getImagem():void{

    if(this.imagem === 'Foto'){

      this.proximaImagem = true
    }

  }

  enviar(): void{

    this.resultado = {
      data: this.data,
      hora: this.hora,
      imagem: this.imagem,
      bandeira: this.bandeira,
      tema: this.tema,
      fakenews: this.fakenews,
      curtidas: this.curtidas,
      comentarios: this.comentarios,
    }

    const dados = JSON.stringify(this.resultado)

    this.requisicao.saveResultados(dados, this.hora)

    this.flag = true

  }

}
