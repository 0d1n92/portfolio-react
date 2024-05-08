
import React from 'react';
import { useTranslation } from 'react-i18next';
import NavItem from '../../input/navitem/NavItem';
import './aside.scss';
import HomeWhite from '@images/home-white.svg';
import HomeBlack from '@images/home-black.svg';
import AboutMeBlack from '@images/aboutme-black.svg'
import AboutMeWhite from '@images/aboutme-white.svg';
import SkillsWhite from '@images/skills-white.svg';
import SkillsBlack from '@images/skills-black.svg';
import ContactWhite from '@images/contact-white.svg';
import ContactBlack from '@images/contact-black.svg';
import Logo from '@images/logo.svg';
const Aside = (props) => {
const { t }  = useTranslation();
  const SECTIONS = [
		{
			name: 'Home',
			url: '#home',
			imgBlack: HomeBlack,
			imgWhite: HomeWhite,
		},
		{
			name: t('About me'),
			url: '#about_me',
			imgBlack: AboutMeBlack,
			imgWhite: AboutMeWhite,
		},
		{
			name: t('Skills'),
			url: '#skills',
			imgBlack: SkillsBlack,
			imgWhite: SkillsWhite,
		},
		{
			name: t('Contact'),
			url: '#contact',
			imgBlack: ContactBlack,
			imgWhite: ContactWhite,
		},
	];
   return (
    <aside>
      <nav>
        <div className='logo-container'>
            <img alt='Enrico Rombaldoni' width={200} src={Logo} />
        </div>
        <ul className='navigation-list'>
          {
            SECTIONS.map((section) => {
              return (
								<li key={section.url}>
									<NavItem {...section} />
								</li>
							);
          }
          )
        }
        </ul>
      </nav>
    </aside>
   )
}

export default Aside;