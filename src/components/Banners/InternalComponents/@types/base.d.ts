export interface IBanner {
    image: {
        path: string;
        describe?: string;
    };
    info?: string;
    description?: {
        text?: string;
        price?: number | string;
    }
}