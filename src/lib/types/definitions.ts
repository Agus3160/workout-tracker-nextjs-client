
export type OptionCheckBoxType = {
  option: string;
  checked: boolean;
}

export interface ResponseType<T=null> {
  statusCode: number;
  message: string;
  success:boolean
  errors:string[]
  data: T;
}

export interface PaginationResponseType<T> {
  values: T[];
  total: number;
  skip: number;
  take: number;
}

import { z } from 'zod';

export const baseDtoSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
export type BaseDtoType = z.infer<typeof baseDtoSchema>;

export const queryFindAllBaseDtoSchema = z.object({
  take: z
    .string()
    .transform((value) => parseInt(value))
    .optional()
    .default('10'),
  skip: z
    .string()
    .transform((value) => parseInt(value))
    .optional().default('0'),
  includeDeleted: z
    .string()
    .transform((value) => value === 'true')
    .optional(),
  order: z.enum(['ASC', 'DESC'], { errorMap: () => ({ message: 'Invalid order' }) }).optional().default('ASC'),
  orderBy: z.string().optional().default("createdAt"),
});
export type QueryFyndAllBaseDtoType = z.infer<typeof queryFindAllBaseDtoSchema>;
