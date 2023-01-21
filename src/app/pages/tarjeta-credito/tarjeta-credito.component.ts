import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    { titulo: 'El popostian', numeroTarjeta: '2738426536', fechaExpiracion: '12/23', cvv: '294'},
    { titulo: 'Cagastian',    numeroTarjeta: '818276578',  fechaExpiracion: '02/28', cvv: '123'},
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16) ]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    console.log(this.form);

    const tarjeta: any = {
      titulo:          this.form.get('titulo')?.value,
      numeroTarjeta:   this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv:             this.form.get('cvv')?.value
    }
    this.listTarjetas.push(tarjeta)
    this.form.reset();
    this.toastr.success('Tarjeta guardada', 'Éxito');

  }

  eliminar(){

     console.log(this.form);

    const tarjeta: any = {
      titulo:          this.form.get('titulo')?.value,
      numeroTarjeta:   this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv:             this.form.get('cvv')?.value
    }
    this.listTarjetas.push(tarjeta)
    this.form.reset();
  }

  eliminarTarjeta(index: number){
    this.listTarjetas.splice(index, 1)
    this.toastr.error('Tarjeta Eliminada','Éxito')

  }

}
