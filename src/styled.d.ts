import 'styled-components';
import MyTheme from './App/Utils/Theme'

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}