export interface IHeader {
    urlBackgroundImage: string;
}

export interface IItem {
    link?: string;
    type?: string;
    name?: string;
    items?: Array<IItem>;
    eventClick?(): void;
}
