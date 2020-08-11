import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from "../../components/ProfileData";
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
	return (
		<Container>
			<Main>
				<LeftSide>
					<ProfileData
						username={"duarteleonardo"}
						name={"Leonardo Duarte"}
						avatarUrl={"https://avatars0.githubusercontent.com/u/68759398?s=460&v=4"}
						followers={120}
						following={85}
						company={"CWI"}
						location={"Porto Alegre"}
						email={"leo@gmail.com"}
						blog={""}
					/>
				</LeftSide>
				<RightSide>
					<Repos>
						<h2>Random reposs</h2>

						<div>
							{[1, 2, 3, 4, 5, 6].map(n => (
								<RepoCard
									key={n}
									username={"duarteleonardo"}
									reponame={"admin"}
									description={"testando a descriçao"}
									language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
									stars={8}
									forks={43}
								/>
							))}
						</div>
					</Repos>
				</RightSide>
			</Main>
		</Container>
	);
}

export default Profile;