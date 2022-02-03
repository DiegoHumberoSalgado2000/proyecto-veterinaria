import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../interfaces/Product.Interface";
import {PagosModel} from "../../models/Pagos.Model";
import {NgForm} from "@angular/forms";
import {PagosService} from "../../services/pagos.service";

@Component({
  selector: 'app-ges-pago',
  templateUrl: './ges-pago.component.html',
  styleUrls: ['./ges-pago.component.css']
})
export class GesPagoComponent implements OnInit {

  pago:PagosModel=new PagosModel();

  constructor(private _pagoService:PagosService) { }

  ngOnInit(): void {
  }

guardar(formPago:NgForm){

    if (formPago.invalid){
return;
    }
    this._pagoService.create(this.pago)
      .subscribe(resp=>console.log(resp))
}
}
