import styled from 'styled-components/native'

interface StyledTextProps {
  textColor: string
  removeMargin: boolean
  fontSize: number
  fontWeight: string
}

export const StyledText = styled.Text`
  margin-bottom: ${({ removeMargin }: StyledTextProps) =>
    removeMargin ? '0' : '10px'};
  font-size: ${({ fontSize }: StyledTextProps) =>
    fontSize ? ` ${fontSize}px` : '14px'}
  font-weight: ${({ fontWeight }: StyledTextProps) =>
    fontWeight || 'normal'};
    ${({ textColor }: StyledTextProps) => `color: ${textColor}`};
`
