import {z} from 'zod';

export const envSchema = z.object({
	NODE_ENV: z.enum(['development', 'test', 'production']),
});
