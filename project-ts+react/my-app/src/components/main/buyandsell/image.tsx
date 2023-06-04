import { ImgMainProps } from "../../../types/mainTypes/ImgMainProps";
import { ImgMain } from './buyAndSellStyle.style';

export const Image: React.FC<ImgMainProps> = ({ Src, Alt }) => {
    return <ImgMain src={Src} alt={Alt} />
}