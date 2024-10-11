export const objectToQuery = (object: any) => {
  let params = new URLSearchParams();
  Object.entries(object).forEach(([key, value]) => {
    if (value) {
      params.append(key, value as string);
    }
  });
  return params.toString();
}