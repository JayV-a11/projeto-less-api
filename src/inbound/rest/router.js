//routes
import example from './routes/example.js';
import costumerRoutes from './routes/costumerRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import cardRoutes from './routes/cardRoutes.js';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

class RouterController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json({ limit: '100mb', extended: true }));
    this.express.use(express.urlencoded({ limit: '100mb', extended: true }));
    this.express.use(cors());
  }

  routes() {
    this.express.use(`/`, example);
    this.express.use(`/`, costumerRoutes);
    this.express.use(`/`, addressRoutes);
    this.express.use(`/`, cardRoutes);
  }
}

export default new RouterController().express;
