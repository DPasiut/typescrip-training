declare module 'stats' {
    export type Stat= (arg: any, arg2: ((a:  typeof arg, b?: typeof arg) => typeof arg)) => typeof arg | number | null;

    export const getMaxIndex: Stat;
    export const getMaxElement: Stat;
    export const getMinIndex: Stat;
    export const getMinElement: Stat;
    export const getMedianIndex: Stat;
    export const getMedianElement: Stat;
    export const getAverageValue: Stat;

    // export function getMaxIndex<T>(input: T[], comparator: ((a: T, b: T) => number)): number;
//     export function getMaxElement<T>(input: T[], comparator: ((a: T, b: T) => number)): T | null;
//     export function getMinIndex<T>(input: T[], comparator: ((a: T, b: T) => number)): number;
//     export function getMinElement<T>(input: T[], comparator: ((a: T, b: T) => number)): T | null;
//     export function getMedianIndex<T>(input: T[], comparator: ((a: T, b: T) => number)): number;
//     export function getMedianElement<T>(input: T[], comparator: ((a: T, b: T) => number)): T | null;
//     export function getAverageValue<T>(input: T[], comparator: ((a: T) => number)): number | null;

}

