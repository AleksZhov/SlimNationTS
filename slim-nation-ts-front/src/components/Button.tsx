import { FC, MouseEventHandler } from "react";
interface IButton { className: string, buttonLabel: string; type:"button" | "submit", onClick?:MouseEventHandler<HTMLButtonElement>}

const Button: FC<IButton> = (props) => {
    const { className, type, buttonLabel,  onClick } = props;

    if (type === "submit") { return (<button className={className} type={type}  > {buttonLabel}</button>) }

    return (<button className={className} type={type} onClick={onClick} > {buttonLabel}</button>)
};

export default Button;