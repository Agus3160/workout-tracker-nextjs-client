import { fetchApi } from ".";
import { PaginationResponseType } from "../types/definitions";
import { ExerciseTypeFindAllFilterDto, ReadExerciseTypeDto } from "../types/exercise-type";
import { objectToQuery } from "../util";

const SERVER_HOST_URL = process.env.SERVER_HOST_URL;

export const getAllExerciseTypes = async (filter: ExerciseTypeFindAllFilterDto) => {
  const query = objectToQuery(filter);
  return await fetchApi<PaginationResponseType<ReadExerciseTypeDto>>(SERVER_HOST_URL+'/exercise-type?' + query);
}