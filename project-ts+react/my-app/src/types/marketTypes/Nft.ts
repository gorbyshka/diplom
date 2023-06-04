import { NftMetadata } from "./NftMetadata";

export interface Nft {
    [x: string]: any;
    owner?: string;
    price?: number;
    metadata?: NftMetadata;
};
