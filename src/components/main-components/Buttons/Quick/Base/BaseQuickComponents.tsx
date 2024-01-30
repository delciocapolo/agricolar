import {FC, JSX} from 'react';

interface IBaseQuickComponents {
    children: JSX.Element;
    classNameType?: string;
}

const BaseQuickComponents:FC<IBaseQuickComponents> = ({children, classNameType}) => {
    return (
        <button type="button" className={`btn-base-quickcomponent ${classNameType} d-flex`}>
            {
                children
            }
        </button>
    )
}

export default BaseQuickComponents;