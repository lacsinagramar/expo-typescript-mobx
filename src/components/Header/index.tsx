import React from 'react'
import { View } from 'react-native'
import { Layout, TopNavigation } from '@ui-kitten/components'

import styles from './styles'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TopNavigation
        title={title}
        alignment="center"
        style={styles.header}
      />
    </View>
  )
}

export default Header
