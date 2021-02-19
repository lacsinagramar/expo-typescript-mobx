import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { Layout } from '@ui-kitten/components'

import Header from '../Header'

interface PageWrapperProps {
  pageTitle: string
  children: ReactNode
}

const PageWrapper = ({
  pageTitle,
  children
}: PageWrapperProps) => {
  return (
    <View>
      <Header title={pageTitle} />
      <View>{children}</View>
    </View>
  )
}

export default PageWrapper
