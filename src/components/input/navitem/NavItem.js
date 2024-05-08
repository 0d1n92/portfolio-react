import './navitem.scss'
import { useState } from 'react';
const NavItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { name, url, imgBlack, imgWhite } = props;

  return (
		<a
			onMouseOver={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
			className={
				isActive
					? 'navitem active animate__animated animate__tada'
					: 'navitem'
			}
			href={url}
		>
			<span className={isActive ? 'icon-item active-bg' : 'icon-item'}>
				<img src={isActive ? imgBlack : imgWhite} alt={name} />
			</span>
			<div>
				{name}
			</div>
		</a>
	);
}

export default NavItem;