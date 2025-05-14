import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config';

/**
 * Sets up Swagger documentation middleware for the Express application
 * @param app Express application
 */
export const setupSwagger = (app: Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
  }));
}; 