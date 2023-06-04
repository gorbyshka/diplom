import { MainBtnLink } from "./buyAndSellStyle.style";

export const MainBtn: React.FC<{ text: string }> = ({ text }) => {
    return <MainBtnLink href="#">{text}</MainBtnLink>;
}
