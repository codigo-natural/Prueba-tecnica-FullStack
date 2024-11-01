export default {
  routes: [
    {
      method: 'DELETE',
      path: '/servicios/deleteLastByColor/:colorId',
      handler: 'servicio.deleteLastByColor',
      config: {
        policies: [],
        middlewares: [],
        auth: false
      },
    }
  ]
}