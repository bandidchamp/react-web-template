import { createTheme } from '@mui/material';


type CustomTheme = {
    sidebarWidth: number,
}

declare module '@mui/material/styles' {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends CustomTheme { }
}

const GlobalMUITheme = createTheme({
    sidebarWidth: 256
});

type ThemeType = typeof GlobalMUITheme;


export default GlobalMUITheme;

export type { ThemeType };