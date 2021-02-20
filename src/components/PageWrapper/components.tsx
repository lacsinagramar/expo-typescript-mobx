import styled from 'styled-components/native'

import { StatusBarHeight } from '../../utils/deviceDimensions'

interface WrapperProps {
  noHeader: boolean
}

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  ${({ noHeader }: WrapperProps) =>
    noHeader && `padding-top: ${StatusBarHeight}px`}
`

export const FullView = styled.View`
  flex: 1;
  padding: 20px;
`
