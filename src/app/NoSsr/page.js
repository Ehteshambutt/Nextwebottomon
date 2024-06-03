// import dynamic from 'next/dynamic'
// const App = dynamic(() => import('../components/App'), {
//   ssr: process.env.NEXT_PUBLIC_SSR_ENABLED
// })
// export default () => <App />
import React from 'react'

const NoSsr = () => {
  return (
    <div>NoSsr</div>
  )
}

export default NoSsr