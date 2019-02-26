import React from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';

// Tabs not elemented due to time, not the time constraint of the project, life got in the way.
export default function Menu(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<React.Fragment>
						<NewPage menu={value.appetizers} location={props.location.pathname} />
						<NewPage menu={value.soup} headline="Soup" location={props.location.pathname} />
						<NewPage
							menu={value.wontonSoup}
							display={value.pumpkin_shrimp}
							location={props.location.pathname}
						/>
						<NewPage menu={value.noodle_soup} display={value.khao_soi} location={props.location.pathname} />
						<NewPage menu={value.salads} display={value.larb} location={props.location.pathname} />
						<NewPage menu={value.noodles} display={value.pad_thai} location={props.location.pathname} />
						<NewPage
							menu={value.stir_fried}
							display={value.chicken_cashew}
							location={props.location.pathname}
						/>
						<NewPage menu={value.curries} display={value.duck_curry} location={props.location.pathname} />
						<NewPage
							menu={value.pumpkin_curry}
							display={value.pumpkin_curr}
							location={props.location.pathname}
						/>
						<NewPage
							menu={value.fried_rice}
							display={value.drunken_noodle}
							location={props.location.pathname}
						/>
						<NewPage menu={value.specials} display={value.panang} location={props.location.pathname} />
					</React.Fragment>
				);
			}}
		</ContextConsumer>
	);
}