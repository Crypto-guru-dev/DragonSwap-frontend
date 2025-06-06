import { Pair } from '@pancakeswap/aptos-swap-sdk'
import type { SerializedFarmConfig } from '@pancakeswap/farms'
import { mainnetTokens } from '../tokens/index'

const farms: SerializedFarmConfig[] = [
  /**
   * These farms should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'JIM',
    lpAddress: '0x159df6b7689437016108a019fd5bef736bac692b6d4a1f10c941f6fbb9a74ca6::oft::CakeOFT',
    token: mainnetTokens.cake,
    quoteToken: mainnetTokens.cake,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 1,
    lpSymbol: 'JIM-APT LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x159df6b7689437016108a019fd5bef736bac692b6d4a1f10c941f6fbb9a74ca6::oft::CakeOFT, 0x1::aptos_coin::AptosCoin>',
    token: mainnetTokens.apt,
    quoteToken: mainnetTokens.cake,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 2,
    lpSymbol: 'JIM-lzUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x159df6b7689437016108a019fd5bef736bac692b6d4a1f10c941f6fbb9a74ca6::oft::CakeOFT, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>',
    token: mainnetTokens.lzusdc,
    quoteToken: mainnetTokens.cake,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 3,
    lpSymbol: 'JIM-ceUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x159df6b7689437016108a019fd5bef736bac692b6d4a1f10c941f6fbb9a74ca6::oft::CakeOFT, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>',
    token: mainnetTokens.ceusdc,
    quoteToken: mainnetTokens.cake,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  // * By order of release
  {
    pid: 22,
    lpSymbol: 'APT-stAPT',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x111ae3e5bc816a5e63c2da97d0aa3886519e0cd5e4b046659fa35796bd11542a::stapt_token::StakedApt, 0x1::aptos_coin::AptosCoin>',
    token: mainnetTokens.stAPT,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 21,
    lpSymbol: 'GUI-APT LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x1::aptos_coin::AptosCoin, 0xe4ccb6d39136469f376242c31b34d10515c8eaaa38092f804db8e08a8f53c5b2::assets_v1::EchoCoin002>',
    token: mainnetTokens.apt,
    quoteToken: mainnetTokens.gui,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 20,
    lpSymbol: 'amAPT-APT LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x111ae3e5bc816a5e63c2da97d0aa3886519e0cd5e4b046659fa35796bd11542a::amapt_token::AmnisApt, 0x1::aptos_coin::AptosCoin>',
    token: mainnetTokens.amapt,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 19,
    lpSymbol: 'APT-THL LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x1::aptos_coin::AptosCoin, 0x7fd500c11216f0fe3095d0c4b8aa4d64a4e2e04f83758462f2b127255643615::thl_coin::THL>',
    token: mainnetTokens.thl,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 18,
    lpSymbol: 'APT-BLT LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x1::aptos_coin::AptosCoin, 0xfbab9fb68bd2103925317b6a540baa20087b1e7a7a4eb90badee04abb6b5a16f::blt::Blt>',
    token: mainnetTokens.blt,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 17,
    lpSymbol: 'ETERN-ceUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x25a64579760a4c64be0d692327786a6375ec80740152851490cfd0b53604cf95::coin::ETERN, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>',
    token: mainnetTokens.ceusdc,
    quoteToken: mainnetTokens.etern,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 16,
    lpSymbol: 'whUSDC-tAPT LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T, 0x84d7aeef42d38a5ffc3ccef853e1b82e4958659d16a7de736a29c55fbbeb0114::staked_aptos_coin::StakedAptosCoin>',
    token: mainnetTokens.tapt,
    quoteToken: mainnetTokens.whusdc,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 15,
    lpSymbol: 'APT-MOVE LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x1::aptos_coin::AptosCoin, 0x27fafcc4e39daac97556af8a803dbb52bcb03f0821898dc845ac54225b9793eb::move_coin::MoveCoin>',
    token: mainnetTokens.move,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 6,
    lpSymbol: 'APT-lzUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x1::aptos_coin::AptosCoin, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>',
    token: mainnetTokens.lzusdc,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 5,
    lpSymbol: 'lzUSDC-lzWETH LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH>',
    token: mainnetTokens.lzweth,
    quoteToken: mainnetTokens.lzusdc,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 4,
    lpSymbol: 'lzUSDC-lzUSDT LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT>',
    token: mainnetTokens.lzusdt,
    quoteToken: mainnetTokens.lzusdc,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 10,
    lpSymbol: 'APT-ceUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x1::aptos_coin::AptosCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>',
    token: mainnetTokens.ceusdc,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 9,
    lpSymbol: 'ceBNB-ceUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::BnbCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>',
    token: mainnetTokens.ceusdc,
    quoteToken: mainnetTokens.cebnb,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 8,
    lpSymbol: 'ceUSDC-ceWETH LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::WethCoin>',
    token: mainnetTokens.ceweth,
    quoteToken: mainnetTokens.ceusdc,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 7,
    lpSymbol: 'ceUSDC-ceUSDT LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdtCoin>',
    token: mainnetTokens.ceusdt,
    quoteToken: mainnetTokens.ceusdc,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 13,
    lpSymbol: 'APT-whUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x1::aptos_coin::AptosCoin, 0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T>',
    token: mainnetTokens.whusdc,
    quoteToken: mainnetTokens.apt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 12,
    lpSymbol: 'whUSDC-whWETH LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T, 0xcc8a89c8dce9693d354449f1f73e60e14e347417854f029db5bc8e7454008abb::coin::T>',
    token: mainnetTokens.whweth,
    quoteToken: mainnetTokens.whusdc,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 11,
    lpSymbol: 'whUSDC-whBUSD LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T, 0xccc9620d38c4f3991fa68a03ad98ef3735f18d04717cb75d7a1300dd8a7eed75::coin::T>',
    token: mainnetTokens.whbusd,
    quoteToken: mainnetTokens.whusdc,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
  {
    pid: 14,
    lpSymbol: 'stAPT-lzUSDC LP',
    lpAddress:
      '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0xd11107bdf0d6d7040c6c0bfbdecb6545191fdf13e8d8d259952f53e1713f61b5::staked_coin::StakedAptos, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>',
    token: mainnetTokens.lzusdc,
    quoteToken: mainnetTokens.stapt,
    dual: {
      token: mainnetTokens.apt,
      aptIncentiveInfo: 0,
    },
  },
].map((p) => ({
  ...p,
  lpAddress: p.lpAddress as `0x${string}`,
  token: p.token.equals(p.quoteToken) ? p.token.serialize : Pair.sortToken(p.token, p.quoteToken)[1].serialize,
  quoteToken: p.token.equals(p.quoteToken)
    ? p.quoteToken.serialize
    : Pair.sortToken(p.token, p.quoteToken)[0].serialize,
}))

export default farms
