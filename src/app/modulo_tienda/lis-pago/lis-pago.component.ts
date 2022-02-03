import { Component, OnInit } from '@angular/core';
import {PagosService} from "../../services/pagos.service";
import {PagosModel} from "../../models/Pagos.Model";

@Component({
  selector: 'app-lis-pago',
  templateUrl: './lis-pago.component.html',
  styleUrls: ['./lis-pago.component.css']
})
export class LisPagoComponent implements OnInit {

  pagos:PagosModel[]=[];
  constructor(private _pagosService: PagosService) { }

  ngOnInit(): void {
    this._pagosService.listar()
      .subscribe(resp=>{
      this.pagos=resp;
    })
  }

}
