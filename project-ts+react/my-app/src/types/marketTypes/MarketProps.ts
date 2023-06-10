export interface MarketProps {
    handleBuyNft: (price: number) => void;
    updateBalance: (price: number) => void;
    insufficientBalance: boolean;
    balance: number
};
