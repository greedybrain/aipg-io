export const convertArrToRecord = <T, K extends keyof T>(
    arr: T[],
    key: K,
): Record<T[K] & string, T> => {
    return arr.reduce((acc, item) => {
        acc[item[key] as T[K] & string] = item;
        return acc;
    }, {} as Record<T[K] & string, T>);
};
