import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../interfaces/Product.Interface";
import {PagosModel} from "../../models/Pagos.Model";
import {NgForm} from "@angular/forms";
import {PagosService} from "../../services/pagos.service";
import Swal from "sweetalert2";
import {Observable} from "rxjs";

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

    Swal.fire({
      icon: 'info',
      title: 'Espere...',
      text: 'Guardando la informacion!',
      allowOutsideClick: false,
      showConfirmButton: false,
      allowEscapeKey: false
    });

    Swal.showLoading();

    let peticion: Observable<any>;

    peticion=this._pagoService.create(this.pago);

  //@ts-ignore
  peticion.subscribe(resp=>{
    Swal.fire({
      icon: 'success',
      title: this.pago.name,
      text: 'Se almacenó el producto correctamente!',
      allowOutsideClick: false,
      showConfirmButton: true,
      allowEscapeKey: false
    });
  });
}
}
