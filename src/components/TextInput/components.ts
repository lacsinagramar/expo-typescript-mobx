import styled from 'styled-components/native'

import { $black } from 'src/utils/colors'

interface StyledInputProps {
  removeMargin: boolean
}

export const StyledInput = styled.TextInput`
  border: 1px solid ${$black};
  padding: 10px;
  border-radius: 10px;
  width: 100%;

  ${({ removeMargin }: StyledInputProps) =>
    removeMargin ? 'margin: 0' : 'margin-bottom: 10px'}
`
