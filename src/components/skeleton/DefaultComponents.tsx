import { JSX, FC } from "react";

interface IButtonPars {
    btn1?: boolean;
    btn2?: boolean;
    text1?: string;
    text2?: string;
}

export const ButtonPars: FC<IButtonPars> = ({btn1, btn2, text1, text2}):JSX.Element => {
    class Buttons {
        
        btnFilled (text: string | undefined) {
            if(!text) {
                throw new Error(`class Buttons -> ${this.btnFilled.name}`);
            }

            return <button type="button" className="btn-pair btn-filled">{ text }</button>;
        }
        
        btnBorders(text: string | undefined) {
            if(!text) {
                throw new Error(`class Buttons -> ${this.btnBorders.name}`);
            }

            return <button type="button" className="btn-pair btn-border">{ text }</button>;
        }
        
        btnFull({text1, text2}:IButtonPars) {
            if(!text1 || !text2) {
                throw new Error(`class Buttons -> ${this.btnFull.name} -> ${this.btnFull.arguments}`);
            }
            return (
                <div className="pair-button d-flex"> 
                    { this.btnFilled(text1) }
                    { this.btnBorders(text2) }
                </div>
            )
        }
    }
    
    const  buttons = new Buttons();
      
    if(btn1 && !btn2) {
        return buttons.btnFilled(text1);
    }
    
    if(btn2 && !btn1) {
        return buttons.btnBorders(text1);
    }

    return buttons.btnFull({text1, text2});
};