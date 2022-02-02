export const onlyTime = (i: string | number): string  => `0${i}`.slice(-2);
export const format = (date: Date): string => `${date.getFullYear()}-${onlyTime(date.getMonth() + 1)}-${onlyTime(date.getDate())}`;
export const changeDate = (date: Date, estuaryDay: number): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate() + estuaryDay);
export const getLastDayNextMonth = (date: Date): Date => new Date(date.getFullYear(), date.getMonth() + 2, 0);
