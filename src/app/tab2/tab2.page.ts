import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicioService } from '../services/servicios.service';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listadoServicio: any;

  constructor(
    public alertController: AlertController,
    public servicioService: ServicioService,
    private router: Router
  ) {

    const listadoDoc = this.servicioService.buscarServicios().toPromise();
    listadoDoc.then(data => {
      this.listadoServicio = data.body;
      console.log("Funciona");
      console.log(this.listadoServicio);
    }); 

  }

  siguientePantalla(servicioSeleccionado:any){
    let navigationExtras: NavigationExtras;
    
    navigationExtras = {
      state: {
        cliente: 'aca va el objeto cliente falta crearlo',
        servicio: servicioSeleccionado,
      }

    };

    this.router.navigate(['/tabs/peluqueria'],navigationExtras);
  }
}
