// utils/date.ts
export const getFormattedDate = (): string => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    //month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
