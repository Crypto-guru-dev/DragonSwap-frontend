import { useWeb3React } from '@pancakeswap/wagmi'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { EXCHANGE_PAGE_PATHS } from 'config/constants/exchange'
import { isChainSupported } from 'utils/wagmi'
import { ChainId } from '@pancakeswap/chains'
import { CHAIN_QUERY_NAME, getChainId } from 'config/chains'
import { getHashFromRouter } from 'utils/getHashFromRouter'
import { useActiveChainId } from './useActiveChainId'
import { useSwitchNetworkLoading } from './useSwitchNetworkLoading'

export function useNetworkConnectorUpdater() {
  const { chainId } = useActiveChainId()
  const previousChainIdRef = useRef(chainId)
  const [loading] = useSwitchNetworkLoading()
  const router = useRouter()

  useEffect(() => {
    const setPrevChainId = () => {
      previousChainIdRef.current = chainId
    }
    if (loading || !router.isReady) return setPrevChainId()
    const parsedQueryChainId = getChainId(router.query.chain as string)

    if (!parsedQueryChainId && chainId === ChainId.SEPOLIA) return setPrevChainId()
    if (parsedQueryChainId !== chainId && isChainSupported(chainId)) {
      const removeQueriesFromPath =
        previousChainIdRef.current !== chainId &&
        EXCHANGE_PAGE_PATHS.some((item) => {
          return router.pathname.startsWith(item)
        })
      const uriHash = getHashFromRouter(router)?.[0]
      const { chainId: _chainId, ...omittedQuery } = router.query
      router.replace(
        {
          query: {
            ...(!removeQueriesFromPath && omittedQuery),
            chain: CHAIN_QUERY_NAME[chainId],
          },
          ...(uriHash && { hash: uriHash }),
        },
        undefined,
        {
          shallow: true,
          scroll: false,
        },
      )
    }
    return setPrevChainId()
  }, [chainId, loading, router])
}

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = () => {
  const web3React = useWeb3React()
  const { chainId, isWrongNetwork } = useActiveChainId()

  return {
    ...web3React,
    chainId,
    isWrongNetwork,
  }
}

export default useActiveWeb3React
