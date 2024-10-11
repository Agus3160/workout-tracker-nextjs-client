import { z } from 'zod';
import { baseDtoSchema, queryFindAllBaseDtoSchema } from './definitions';

export const createExerciseTypeDtoSchema = z.object({
  name: z.string().max(64),
  description: z.string(),
});
export const updateExerciseTypeDtoSchema = createExerciseTypeDtoSchema.partial();
export const readExerciseTypeDtoSchema = baseDtoSchema.merge(createExerciseTypeDtoSchema);
export const exerciseTypeFindAllFilterDtoSchema = queryFindAllBaseDtoSchema.merge(createExerciseTypeDtoSchema.partial());

export type CreateExerciseTypeDto = z.infer<typeof createExerciseTypeDtoSchema>;
export type UpdateExerciseTypeDto = z.infer<typeof updateExerciseTypeDtoSchema>;
export type ReadExerciseTypeDto = z.infer<typeof readExerciseTypeDtoSchema>;
export type ExerciseTypeFindAllFilterDto = z.infer<typeof exerciseTypeFindAllFilterDtoSchema>;