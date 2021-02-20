import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'

import { $white, $red } from '../../utils/colors'

import { RootStoreContext } from '../../store/RootStore'

import H1 from '../../components/H1'
import Button from '../../components/Button'
import PageWrapper from '../../components/PageWrapper'
import Paragraph from '../../components/Paragraph'
import TextInput from '../../components/TextInput'

import { LandingView } from './components'

const Landing = observer(() => {
  const { userInfoStore } = useContext(RootStoreContext)
  const { updateUserInfo } = userInfoStore

  const navigation = useNavigation()

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [showError, setShowError] = useState<boolean>(false)

  const enterAppButtonPress = () => {
    const valid = firstName.length && lastName.length
    if (valid) {
      updateUserInfo({ firstName, lastName })
      setShowError(false)
      return navigation.navigate('Home')
    }

    return setShowError(true)
  }

  return (
    <PageWrapper noHeader removeScroll>
      <LandingView>
        <H1>Welcome to My App!</H1>
        <Paragraph removeMargin={false}>
          Please enter your information below:
        </Paragraph>
        <TextInput
          placeholder="Enter your First Name"
          value={firstName}
          onChangeText={(value: string) => setFirstName(value)}
        />
        <TextInput
          placeholder="Enter your Last Name"
          value={lastName}
          onChangeText={(value: string) => setLastName(value)}
        />
        {showError && (
          <Paragraph removeMargin={false} textColor={$red}>
            All fields are required
          </Paragraph>
        )}
        <Button onPress={enterAppButtonPress}>
          <Paragraph textColor={$white}>Enter App</Paragraph>
        </Button>
      </LandingView>
    </PageWrapper>
  )
})

export default Landing
