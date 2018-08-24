import React from 'react';
import userIcon from '../images/user-icon.svg';

const UserIcon = () => <img src={userIcon} />;

export default () => (
	<div className="user-account-container">
		<UserIcon />
		Jane Smith
	</div>
);
