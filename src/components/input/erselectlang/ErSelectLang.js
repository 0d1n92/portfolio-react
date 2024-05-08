import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import './erselectlang.scss'


export const ErSelectLang = (props) => {
  const {langs} = props;
 const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState(langs[0]);

const handleSelect = (e) => {
  setSelectedLang(langs.find( lang => lang.code === e));
   i18n.changeLanguage(e);
};

useEffect (()=> {
   setSelectedLang(langs.find((lang) => lang.code === i18n.language));
},[]);

	return (
		<Dropdown className="er-select-lang" onSelect={handleSelect}>
			<Dropdown.Toggle className="er-item-select-lang">
				<img src={selectedLang.img} alt={selectedLang.code} />
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{langs.map((lang, index) => (
					<Dropdown.Item
						className="er-item-select-lang"
						key={index}
						eventKey={lang.code}
					>
						<img title={lang.code} src={lang.img} alt={lang.code} />
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};
