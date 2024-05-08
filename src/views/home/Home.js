import React, { useEffect, useState, useTransition } from "react";
import BgImage from '@images/bg_home.png'
import './home.scss'
import { Container, Row } from "react-bootstrap";
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

  return (
		<section className="home" style={{ backgroundImage: `url(${BgImage})` }}>
			<Container>
				<Row className="container-hero-section-home">
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
          <ErButton title="Download Cv" icon="fa-solid fa-download" size='xs' action='#' />
				</Row>
			</Container>
		</section>
	);
}