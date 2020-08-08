import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from "../../components/ProfileData";

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
				<RightSide></RightSide>
			</Main>
		</Container>
	);
}

export default Profile;