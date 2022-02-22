import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import ThemeContextProvider, { ThemeContext } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			<ThemeContext.Consumer>
				{({ themeColor }) => (
					<Layout>
						<Component {...pageProps} />

						<style jsx global>{`
							:root {
								--primaryColor: ${themeColor};
								--boxShadow: 0 2px 6px rgba(28, 28, 48, 0.233);
								--border: 1px solid #d6d6d6;
								--lightTextColor: #888888;
							}
						`}</style>
					</Layout>
				)}
			</ThemeContext.Consumer>
		</ThemeContextProvider>
	);
}

export default MyApp;
