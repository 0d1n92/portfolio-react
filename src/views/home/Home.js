import React, { useEffect, useState } from "react";
import BgImage from '@images/bg_home.png'
import BgImageXs from '@images/bg_home_xs.png';
import './home.scss'
import { Container, Row, Col } from "react-bootstrap";
import { ErButton } from "../../components/input/erbutton/ErButton";
import { useTranslation } from 'react-i18next';

export const Home = () => {
const activities = ['FISHERMAN', 'DEVELOPER', 'PERSON', 'PLAYER'];
const { t } = useTranslation();
const [activity, setActivity] = useState(activities[0]);
const [isWobbling, setIsWobbling] = useState(false);
   const selectNextActivity = () => {
			const currentIndex = activities.indexOf(activity);
			const nextIndex = (currentIndex + 1) % activities.length;
			setActivity(activities[nextIndex]);
      setIsWobbling(true);
		};

  useEffect(() => {
		 const intervalId = setInterval(selectNextActivity, 5000);
			return () => clearInterval(intervalId);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activity]);


  const handleAnimationEnd = () => {
		setIsWobbling(false); // Disattiva l'animazione
	};

 const [width, setWidth] = useState(window.innerWidth);

 function handleWindowSizeChange() {
		setWidth(window.innerWidth);
 }

 useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
 }, []);

 const isMobile = width <= 768;

  return (
		<section
			className="home d-flex"
			style={{ backgroundImage: `url(${isMobile ? BgImageXs : BgImage})` }}
		>
			<Container className="my-auto">
				<Row className="container-hero-section-home ">
					<Col md="6" sm="12">
						<h1>
							<div className="heroSection">
								<b>HI, I'M ENRICO ROMBALDONI! curious &#160;</b>
								<span
									className={`animate__animated ${
										isWobbling ? 'animate__fadeInDown' : ''
									}`}
									onAnimationEnd={handleAnimationEnd}
								>
									{activity}
								</span>
							</div>
						</h1>
						<p>
							<cite>{t('My cite')}</cite>
							{t('My description')}
						</p>
						<ErButton
							title="Download Cv"
							icon="fa-solid fa-download"
							size="xs"
							action="#"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
}