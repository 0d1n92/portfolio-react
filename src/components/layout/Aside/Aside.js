
import React from 'react';
import NavItem from '../../input/navitem/NavItem';
import './aside.scss';
import Logo from '@images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Aside = ({sections}) => {


   return (
			<>
				<aside>
					<nav>
						<div className="d-lg-block er-nav">
							<div className="logo-container">
								<img alt="Enrico Rombaldoni" width={200} src={Logo} />
							</div>
							<ul className="navigation-list">
								{sections.map((section) => {
									return (
										<li key={section.url}>
											<NavItem {...section} />
										</li>
									);
								})}
							</ul>
						</div>
					</nav>
				</aside>
			</>
		);
}

export default Aside;