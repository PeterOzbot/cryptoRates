import { ICryptoCurrency } from './crypto-currency.interface';

export interface ICryptoCurrencyDetails extends ICryptoCurrency {
    name: string;
    change1h: number;
    change7d: number;
    volume24h: number;
    marketCap: number;
    btcPrice: number;
    totalSupply: number;
    maxSupply: number;
}