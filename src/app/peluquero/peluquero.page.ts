import { Component, OnInit } from '@angular/core';
import { NavigationExtras,ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-peluquero',
  templateUrl: './peluquero.page.html',
  styleUrls: ['./peluquero.page.scss'],
})
export class PeluqueroPage implements OnInit {

  peluqueroList:any;
  listadoPeluquerias : any;
  servicioSeleccionado : any;
  
  constructor(private route: ActivatedRoute, 
    private router: Router) { 

      try {
        this.route.queryParams.subscribe(() => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.peluqueroList = this.router.getCurrentNavigation().extras.state.peluqueria.peluqueroList;       
            console.log(this.peluqueroList);
          }
        });
      } catch (error) {
        console.log("ERROR --> " + error);
      }
      
    }

  ngOnInit() {
  }

  seleccionarPeluquero(peluquero:any){
    let navigationExtras: NavigationExtras;
    
    navigationExtras = {
      state: {
        cliente: 'aca va el objeto cliente falta crearlo',
        servicio: this.servicioSeleccionado,
        peluqueria: peluquero
      }

    };

    this.router.navigate(['/tabs/turno'],navigationExtras);

  }
 

  
  
}
