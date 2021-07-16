import { Component, OnInit } from '@angular/core';
import { PeluqueriaService } from '../services/peluqueria.service';
import { NavigationExtras,ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-peluqueria',
  templateUrl: './peluqueria.page.html',
  styleUrls: ['./peluqueria.page.scss'],
})
export class PeluqueriaPage implements OnInit {

  listadoPeluquerias : any;
  servicioSeleccionado : any;


  constructor(public peluqueriaService : PeluqueriaService,private route: ActivatedRoute, 
    private router: Router) { 

    const listadoDoc = this.peluqueriaService.buscarPeluquerias().toPromise();
    listadoDoc.then(data => {
      this.listadoPeluquerias = data.body;
      console.log("Funciona");
      console.log(this.listadoPeluquerias);
    }); 

    try {
      this.route.queryParams.subscribe(() => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.servicioSeleccionado = this.router.getCurrentNavigation().extras.state.servicio;       
        }
      });
    } catch (error) {
      console.log("ERROR --> " + error);
    }

  }

  ngOnInit() {
  }

  seleccionarPeluqueria(peluqueria:any){
    let navigationExtras: NavigationExtras;
    
    navigationExtras = {
      state: {
        cliente: 'aca va el objeto cliente falta crearlo',
        servicio: this.servicioSeleccionado,
        peluqueria: peluqueria
      }

    };

    this.router.navigate(['/tabs/peluquero'],navigationExtras);

  }
}
