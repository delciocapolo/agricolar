// Select Custom
export interface IItemMenu {
    type?: 'link' | 'submenu';
    url?: string;
    text?: string;
}

export interface ISelectCustom {
    title: string;
    items?: IItemMenu[]
}


// Menu Custom
export interface IMenuCustom {
    items: IITemMenuCustom[];
    className?: string;
}

export interface IITemMenuCustom {
    title: string;
    url?: string;
    list?: IITemMenuCustom[]
}