import React from 'react';
import { Scene, Router} from 'react-native-router-flux';

const RouterComponent = () => {
 	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			{/* <Scene key="login" component={LoginForm} title="Please Login" /> */}
		</Router>
	);
};

export default RouterComponent;