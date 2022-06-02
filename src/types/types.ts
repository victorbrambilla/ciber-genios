import 'styled-components';

export interface ICar {
  name: string;
  year: number;
  velocity: number;
  gradeEconomy: number;
  gradeUsers: number;
  link: string;
  linkImg?: string;
}

// and extend them!
declare module 'styled-components' {
  export interface ITheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
    };
  }
}
