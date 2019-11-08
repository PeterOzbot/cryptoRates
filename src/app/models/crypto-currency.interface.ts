export interface ICryptoCurrency {
    name: string;
    rank: number;
    symbol: string;
    price: number;
    change1h: number;
    change24h: number;
    change7d: number;
    volume24h: number;
    marketCap: number;
    btcPrice: number;
    totalSupply: number;
    maxSupply: number;
}