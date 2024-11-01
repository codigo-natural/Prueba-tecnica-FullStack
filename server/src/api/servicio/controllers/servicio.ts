/**
 * servicio controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::servicio.servicio', ({ strapi }) => ({
  async deleteLastByColor(ctx) {
    const { colorId } = ctx.params;

    try {
      // Encontrar el último servicio para el color específico
      const [lastService] = await strapi.entityService.findMany('api::servicio.servicio', {
        filters: {
          color: colorId,
        },
        sort: { createdAt: 'desc' },
        limit: 1,
      });

      if (!lastService) {
        return ctx.notFound('No services found for this color');
      }

      // Eliminar el servicio encontrado
      const deletedService = await strapi.entityService.delete(
        'api::servicio.servicio',
        lastService.id
      );

      return ctx.send({
        data: deletedService,
        message: 'Last service deleted successfully',
      });
    } catch (error) {
      return ctx.badRequest('Failed to delete last service');
    }
  },
}));
