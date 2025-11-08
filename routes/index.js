import express from 'express';
import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const PATH_ROUTES = __dirname;

const loadRoutes = async () => {
    const files = fs.readdirSync(PATH_ROUTES);

    for (const file of files) {
        
        if (file === 'index.js') continue;
        const route = `./${file}`;
        console.log(`Loading route: ${route}`);
        const { default: routeModule } = await import(route);
        console.log(`Mounted route: /${file.replace('.js', '')}`);
        router.use(`/${file.replace('.js', '')}`, routeModule);
    }
};

await loadRoutes();

export default router;