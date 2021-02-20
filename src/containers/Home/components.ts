import styled from 'styled-components/native'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'

export const ToDoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`

export const AddToDoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`
export const AddToDoInput = styled(TextInput)`
  flex: 0.9;
  margin-right: 15px;
  margin-bottom: 0;
`

export const AddToDoButton = styled(Button)`
  flex: 0.1;
  padding: 10px;
`
