
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
function App() {

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

  return (
		<>
			<Container fluid className="p-0 ">
				<Row>
					<Col md="3">
						<Aside />
					</Col>
					<Col md="9">
						<ErSelectLang langs={langs} />

						<Home />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
