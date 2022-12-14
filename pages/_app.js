import React from "react";
import { ThemeProvider } from "styled-components"
import { CSSReset } from "../source/components/CSSReset"
import ColorModeProvider, {ColorModeContext} from "../source/components/Menu/components/ColorMode";

const theme = {
    light: {
        backgroundBase: '#f9f9f9',
        backgroundLevel1: '#ffffff',
        backgroundLevel2: '#f0f0f0',
        borderBase: '#e5e5e5',
        textColorBase: '#222222'
    },
    dark: {
        backgroundBase: '#181818',
        backgroundLevel1: '#202020',
        backgroundLevel2: '#313131',
        borderBase: '#383838',
        textColorBase: '#ffffff'
    }
};

function ProviderWrapper(){
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    console.log("Hi, App!")
    const contexto = React.useContext(ColorModeContext);
    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default function _App(props){
    <ProviderWrapper>
        <MyApp {...props}/>
    </ProviderWrapper>
}