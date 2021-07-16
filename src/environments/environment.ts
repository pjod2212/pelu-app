// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'local',

  //Config base.
  serverUrl: 'https://cors-anywhere.herokuapp.com/https://app-gestionturnospeluqueria.herokuapp.com/',
  
  //Enpoints
  servicioEndpoint: 'peluquero/servicios',
  peluqueriaEndpoint: 'peluqueria/peluquerias',
  //entregasEndpoint: '/entregas',
  //cotizacionEndpoint: '/cotizacion',
  //tipoDeCambioEndpoint: '/tipoCambio',
  //configuraciones: '/configuraciones',
  //registro: '/registro_precotizacion',
  //seguimiento: '/seguimiento',
  //envioMail: '/email'
};