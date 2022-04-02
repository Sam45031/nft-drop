import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

// A provider wraps the application enabling child components to use the functionality
// Rinkeby is fake ethereum
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
