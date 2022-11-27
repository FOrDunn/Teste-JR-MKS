import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-family: "Montserrat", sans-serif;
	-webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
	width: 6px; height: 0;
	scrollbar-width: 6px;
}

::-webkit-scrollbar, ::-webkit-scrollbar-track {
	 background: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #ff5100;
}

::-webkit-scrollbar, ::-webkit-scrollbar-track {
	background: transparent;
}`;
