declare module 'str-utils' {
    export type StrUtil = (value: string) => string;

    export const strReverse: StrUtil;
    export const strToLower: StrUtil;
    export const strToUpper: StrUtil;
    export const strInvertCase: StrUtil;
    export const strRandomize: StrUtil;
}