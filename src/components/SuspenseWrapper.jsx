import {Suspense} from 'react'

const SuspenseWrapper = ({children, fallback}) => {
  return (
    <>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </>
  )
}

export default SuspenseWrapper
