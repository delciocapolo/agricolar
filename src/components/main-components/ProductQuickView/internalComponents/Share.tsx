import { FC, JSX } from "react";
import { ItemShare, LinkShare } from "../ComponentBase/BaseProductDetails"

const ShareWith: FC<{ Icon: JSX.Element, url: string }> = ({ Icon, url }) => {
    return (
        <ItemShare>
            <LinkShare className="d-flex" href={url} target="_self">
                {
                    Icon
                }
            </LinkShare>
        </ItemShare>
    )
};

export default ShareWith;