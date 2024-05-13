import { ChainId } from "@pancakeswap/chains";
import { Currency, NATIVE, Token } from "@pancakeswap/sdk";
import { bscTokens, ethereumTokens } from "@pancakeswap/tokens";
import memoize from "lodash/memoize";
import { getAddress } from "viem";

const mapping: { [key: number]: string } = {
  [ChainId.BSC]: "smartchain",
  [ChainId.BYTE_TESTNET]: "byteTestnet",
  [ChainId.ETHEREUM]: "ethereum",
  [ChainId.POLYGON_ZKEVM]: "polygonzkevm",
  [ChainId.ARBITRUM_ONE]: "arbitrum",
  [ChainId.ZKSYNC]: "zksync",
  [ChainId.BASE]: "base",
  [ChainId.LINEA]: "linea",
  [ChainId.OPBNB]: "opbnb",
};

export const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && mapping[token.chainId]) {
      return `https://asset.byteswap.finance/images/${mapping[token.chainId]}/${getAddress(
        token.address
      )}.png`;
    }
    return null;
  },
  (t) => `${t?.chainId}#${t?.address}`
);

export const getTokenLogoURLByAddress = memoize(
  (address?: string, chainId?: number) => {
    if (address && chainId && mapping[chainId]) {
      return `https://asset.byteswap.finance/images/${mapping[chainId]}/${getAddress(
        address
      )}.png`;
    }
    return null;
  },
  (address, chainId) => `${chainId}#${address}`
);

const chainName: { [key: number]: string } = {
  [ChainId.BSC]: "",
  [ChainId.ETHEREUM]: "eth",
  [ChainId.POLYGON_ZKEVM]: "polygon-zkevm",
  [ChainId.ARBITRUM_ONE]: "arbitrum",
  [ChainId.ZKSYNC]: "zksync",
  [ChainId.LINEA]: "linea",
  [ChainId.BASE]: "base",
  [ChainId.OPBNB]: "opbnb",
  [ChainId.BYTE_TESTNET]: "byteTestnet",
};

// TODO: move to utils or token-list
export const getTokenListBaseURL = (chainId: number) =>
  `https://asset.byteswap.finance/images/${chainName[chainId]}`;

export const getTokenListTokenUrl = (token: Token) =>
  Object.keys(chainName).includes(String(token.chainId))
    ? `https://asset.byteswap.finance/images/${
        token.chainId === ChainId.BYTE_TESTNET ? "" : `${chainName[token.chainId]}/`
      }${token.address}.png`
    : null;

const commonCurrencySymbols = [
  ethereumTokens.usdt,
  ethereumTokens.usdc,
  bscTokens.cake,
  ethereumTokens.wbtc,
  ethereumTokens.weth,
  NATIVE[ChainId.BYTE_TESTNET],
  bscTokens.busd,
  ethereumTokens.dai,
].map(({ symbol }) => symbol);

export const getCommonCurrencyUrl = memoize(
  (currency?: Currency): string | undefined => getCommonCurrencyUrlBySymbol(currency?.symbol),
  (currency?: Currency) => `logoUrls#${currency?.chainId}#${currency?.symbol}`
);

export const getCommonCurrencyUrlBySymbol = memoize(
  (symbol?: string): string | undefined =>
    symbol && commonCurrencySymbols.includes(symbol)
      ? `https://asset.byteswap.finance/web/tokens/symbol/${symbol.toLocaleLowerCase()}.png`
      : undefined,
  (symbol?: string) => `logoUrls#symbol#${symbol}`
);

type GetLogoUrlsOptions = {
  useTrustWallet?: boolean;
};

export const getCurrencyLogoUrls = memoize(
  (currency: Currency | undefined, { useTrustWallet = true }: GetLogoUrlsOptions = {}): string[] => {
    const trustWalletLogo = getTokenLogoURL(currency?.wrapped);
    const logoUrl = currency ? getTokenListTokenUrl(currency.wrapped) : null;
    return [getCommonCurrencyUrl(currency), useTrustWallet ? trustWalletLogo : undefined, logoUrl].filter(
      (url): url is string => !!url
    );
  },
  (currency: Currency | undefined, options?: GetLogoUrlsOptions) =>
    `logoUrls#${currency?.chainId}#${currency?.wrapped?.address}#${options ? JSON.stringify(options) : ""}`
);
