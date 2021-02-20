import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { FullView, Wrapper } from './components'

interface PageWrapperProps {
  children: ReactNode
  noHeader?: boolean
  removeScroll?: boolean
}

const PageWrapper = ({
  children,
  noHeader = false,
  removeScroll = false
}: PageWrapperProps) => {
  return (
    <Wrapper noHeader={noHeader}>
      {removeScroll ? (
        <FullView>{children}</FullView>
      ) : (
        <KeyboardAwareScrollView>
          <View style={{ padding: 20 }}>{children}</View>
        </KeyboardAwareScrollView>
      )}
    </Wrapper>
  )
}

export default PageWrapper
