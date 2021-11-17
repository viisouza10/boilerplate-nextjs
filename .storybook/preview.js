import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'

export const decorators = [
    (Story) =>(
        <ThemeProvider theme={{}}>
            <GlobalStyles/>
            <Story/>
        </ThemeProvider>
    )
]
