import styled from 'styled-components/native'

import { $primary } from 'src/utils/colors'

interface StyledTouchableProps {
  variant: string
}

export const StyledTouchable = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 25px;

  ${({ variant }: StyledTouchableProps) => {
    switch (variant) {
      case 'primary': {
        return `
                background-color: ${$primary}
              `
      }
      default: {
        return `
            background-color: ${$primary}
          `
      }
    }
  }}
`
