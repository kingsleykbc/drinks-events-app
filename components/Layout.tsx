import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = (props: any) => {
	return (
		<>
			<Head>
				<title>Drinks Events App</title>
				<meta name='description' content='Drinks events App (Silicon Rhino Assessment)' />
				<link rel='icon' href='/images/beer-icon-background.png' />
			</Head>
			<Header />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
