import React, { Component } from 'react';
import {  } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { 
		email: '',
		password: ''
	};

	onButtonPress() {
		const { email, password } = this.state;

		//handle sign in a user with email and password
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={text => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;