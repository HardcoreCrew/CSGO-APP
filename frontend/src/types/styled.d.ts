import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme{
    name: string;
    colors: {
        mainColor: string;
        mainColor_light: string;
        mainColor_text: string;
        body: string;
        component_background: string;
        body_sec_light: string;
        body_sec_light_secondary: string;
        icons_base: string;
        color: string;
        fontColor: string;
        _lightBox: string;
        _lightBoxText: string;
        msgBody_standard: string;
        msgBody_self: string;
        baseColor: string;
        baseColor_active: string;
        baseColor_active_50: string;
        baseColor_secondary: string;
        baseColor_secondary_50: string;
        baseColor_secondary_active: string;
        baseInputBackground: string;
        baseInputBackground_active: string;
        soft_blue: string;
        cyan: string;
        cyan_hover: string;
        very_dark_blue_bg2: string;
        very_dark_blue_cbg: string;
        very_dark_blue_line: string;
    }
  }
} 
