import React, { useEffect, useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import NavItem from '../../input/navitem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ernavbar.scss'

export const ErNavbar = ({sections}) => {
  const [open, setOpen] = useState(false)


  const handleOpen = () => {
    setOpen(!open);
  }

  useEffect(() => {
   setOpen(false)
  }, [])
   return (
			<nav
				className={`er-navbar-mobile d-lg-none ${open ? 'full-screen' : null} `}
			>
				<Container className="height-full" fluid>
					<Row className="height-full">
						<Col className="d-flexheight-full" sm="12">
							<FontAwesomeIcon
								className="hamburger-icon"
								size="2xl"
								icon={'fa-solid fa-bars'}
								onClick={handleOpen}
							/>
						</Col>
						{open ? (
							<Col sm="12" className="d-flex justify-content-center">
								<ul className="navigation-list">
									{sections.map((section) => {
										return (
											<li key={section.url}>
												<NavItem {...section} />
											</li>
										);
									})}
								</ul>
							</Col>
						) : null}
					</Row>
				</Container>
			</nav>
		);
}