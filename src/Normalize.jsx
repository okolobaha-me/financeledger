import { css, Global } from '@emotion/react';
import { defaultFont } from './utils/styleVariables';

export const Normalize = () => {
   return (
      <Global
         styles={css`
            * {
               box-sizing: border-box;
            }
            body {
               margin: 0;
               -webkit-font-smoothing: antialiased;
               -moz-osx-font-smoothing: grayscale;
               font-family: ${defaultFont};
            }

            code {
               font-family: source-code-pro, Menlo, Monaco, Consolas,
                  'Courier New', monospace;
            }
            p {
               padding: 0;
               margin: 0;
            }

            a {
               text-decoration: none;
               color: inherit;
            }

            ul {
               margin: 0;
               padding: 0;
               list-style: none;
            }
            li {
               margin: 0;
               padding: 0;
            }

            h1,
            h2,
            h3,
            h4 {
               padding: 0;
               margin: 0;
            }

            button {
               outline: none;
               cursor: pointer;
               border: none;
            }

            img {
               display: block;
            }
         `}
      />
   );
};
