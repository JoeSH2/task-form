export const cls = (
  className: string,
  objClassNames: Record<string, boolean | string | undefined>,
  arrayClassNames: Array<string | undefined>
): string => {
  return [
    className,
    Object.entries(objClassNames)
      .filter(([_, key]) => Boolean(key))
      .map(([className]) => className),
    arrayClassNames.join(''),
  ].join(' ');
};
