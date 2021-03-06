import 'dotenv/config'

import usuarioController from './controller/usuarioController.js'; 
import animeController from './controller/animeController.js';

import express from 'express' 
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use(animeController);
server.use(usuarioController);

server.listen(process.env.PORT, () => console.log(`API onlini na porta ${process.env.PORT}`));