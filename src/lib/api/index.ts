import { ResponseType } from "../types/definitions";

export const fetchApi = async <T>(
  url: string,
  options?: RequestInit
): Promise<ResponseType<T | null>> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const data = await response.json();
      return {
        statusCode: response.status,
        message: data.message,
        success: false,
        errors: data.errors,
        data: null,
      };
    }

    const data = await response.json();
    return {
      statusCode: response.status,
      message: data.message,
      success: true,
      errors: [],
      data: data.data,
    };
  } catch (error) {
    if (error instanceof Error)
      return {
        statusCode: 500,
        message: error.message,
        success: false,
        errors: [],
        data: null,
      };

    return {
      statusCode: 500,
      message: "Something went wrong",
      success: false,
      errors: [],
      data: null,
    };
  }
};
