// styled.d.ts
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      base: string
      action: string
      border: string
      gray: string
      white: string
      black: string
      sun: string
      moon: string
      inputText: string
      cardBackground: string
      icons: string
   }
   spacing: {
    sm: string,
    md: string,
    lg: string
}
  }
}