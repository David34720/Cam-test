import { resolve } from 'node:path';
import { cwd } from 'node:process';
import { config } from 'dotenv';

// Charge les variables d'environnement définies dans le fichier .env.test
config({ path: resolve(cwd(), '.env.test') });
