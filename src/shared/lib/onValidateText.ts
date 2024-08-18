export const onValidateText = (
  input: string,
  valid?: RegExp,
  similarity?: string,
  symbols: number = 0
): boolean => {
  let result: boolean = false;

  if (valid && !similarity) {
    if (input.match(valid) && input.length > symbols) {
      result = true;
    }
  }
  if (similarity && !valid) {
    if (input.length > symbols && input === similarity) {
      result = true;
    }
  }

  if (similarity && valid) {
    if (input.length > symbols && input.match(valid) && input === similarity) {
      result = true;
    }
  }

  return result;
};
