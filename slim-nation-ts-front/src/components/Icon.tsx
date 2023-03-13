import { FC, MouseEventHandler } from "react";
import icons from "../image/svg/sprite.svg"

interface IIcon { iconName:string, width:string, height:string, onClick:MouseEventHandler, className:string}

const Icon: FC<IIcon> = (props) => {
    const { iconName, width, height, onClick, className } = props;
    
    return (<svg className ={className} width={width} height = {height} onClick ={onClick}><use href={`${icons}/#${iconName}`} /></svg>)
}
export default Icon