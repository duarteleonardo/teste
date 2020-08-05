import React from 'react';

import { Container, GitHubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<GitHubLogo />
			<SearchForm>
				<input />
			</SearchForm>
		</Container>
	);
}

export default Header;