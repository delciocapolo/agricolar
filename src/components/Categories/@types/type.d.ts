export interface ILoaderSchema {
    params: {
        category: string;
    }
}
export type ILoader<T = any> = T extends ILoaderSchema ? T : unknown;
