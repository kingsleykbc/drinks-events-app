import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSelector from './ThemeSelector';
import { BsGithub as IcGitHub } from 'react-icons/bs';
import { MdReceipt as IcQuote } from 'react-icons/md';

const Header = () => {
	const router = useRouter();

	return (
		<header>
			<Link href='/'>
				<a className='logo'>
					<Image alt='logo' src='/images/logo.png' width={50} height={30} />
					<h3>silicon rhino</h3>
				</a>
			</Link>

			<div className='actions'>
				<ThemeSelector />
				<a href='https://github.com/kingsleykbc/drinks-events-app'>
					<button className='github'>
						<IcGitHub /> <span>GitHub</span>
					</button>
				</a>
				<a href='https://www.siliconrhino.io/contact/'>
					<button className='quote'>
						<IcQuote />
						<span> Get a quote</span>
					</button>
				</a>
			</div>

			{/* STYLE */}
			<style jsx>{`
				header,
				.logo,
				.actions,
				button {
					display: flex;
					align-items: center;
				}

				header {
					justify-content: space-between;
					padding: 10px 30px;
				}

				h3 {
					margin-left: 20px;
					font-weight: normal;
					color: #fff;
					opacity: 0.6;
					font-size: 1.4rem;
				}

				.actions {
					gap: 10px;
					border-radius: 50px;
					box-shadow: ${router.pathname === '/' ? 'none' : 'var(--boxShadow)'};
					padding: 10px;
					background: var(--primaryColor);
				}

				button {
					border: 2px solid #fff;
					padding: 8px 20px;
				}

				button span {
					margin-left: 10px;
				}

				button :global(svg) {
					font-size: 1.5rem;
				}

				.quote {
					background: #fff;
					color: #000;
				}

				.github {
					box-shadow: none;
				}

				@media screen and (max-width: 650px) {
					button span {
						display: none;
					}

					button {
						padding: 8px;
					}

					.logo h3 {
						display: none;
					}

					header {
						padding: 10px 12px;
					}
				}
			`}</style>
		</header>
	);
};

export default Header;
