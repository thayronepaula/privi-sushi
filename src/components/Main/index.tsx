import { Flex, VStack } from '@chakra-ui/react'
import MainCTA from '../MainCTA'

import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

function Main({ children }) {
  const router = useRouter()
  const [path, setPath] = useState('')

  useEffect(() => {
    if (router) {
      const asPath = router.pathname
      setPath(asPath)
    }
  }, [router])

  return (
    <main
      className="flex flex-col items-center justify-start flex-grow w-full h-full"
      style={{ height: 'max-content' }}
    >
      {path === '/kashi/lend' ||
      path === '/kashi/create' ||
      path === '/farm' ||
      path === '/borrow' ||
      path === '/lend' ||
      path === '/kashi/borrow' ||
      path === '/stake' ||
      path === '/bar' ||
      path === '/balances' ||
      path === '/user/balances' ||
      path === '/stake/' ? (
        children
      ) : (
        <div className="flex flex-row pt-20 space-x-10">
          <MainCTA />
          <div className="flex flex-col">{children}</div>
        </div>
      )}
    </main>
  )
}

export default Main
