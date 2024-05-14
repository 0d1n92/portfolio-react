
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aside from './components/layout/Aside/Aside';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@scss/main.scss'
import '@assets/css/index.css'
import { Home } from './views/home/Home';
import { ErSelectLang } from './components/input/erselectlang/ErSelectLang';
import itFlag from '@images/italy.png';
import enFlag from '@images/united-kingdom.png';
import { ErNavbar } from './components/layout/ernavbar/ErNavbar';
import HomeWhite from '@images/home-white.svg';
import HomeBlack from '@images/home-black.svg';
import AboutMeBlack from '@images/aboutme-black.svg';
import AboutMeWhite from '@images/aboutme-white.svg';
import SkillsWhite from '@images/skills-white.svg';
import SkillsBlack from '@images/skills-black.svg';
import ContactWhite from '@images/contact-white.svg';
import ContactBlack from '@images/contact-black.svg'
import { useTranslation } from 'react-i18next';
function App() {
  const { t } = useTranslation();

  const langs = [
		{
			code: 'it',
			img: itFlag,
		},
		{
			code: 'en',
			img: enFlag,
		},
	];

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
		<>
			<ErSelectLang langs={langs} />
			<Container fluid className="p-0 ">
				<Row>
					<ErNavbar sections={SECTIONS} />
					<Col className="d-md-none d-lg-block" sm="0" md="2">
						<Aside sections={SECTIONS} />
					</Col>
					<Col sm="12" md="10">
						<Home />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
