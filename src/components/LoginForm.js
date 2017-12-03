import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	// state = { 
	// 	email: '',
	// 	password: ''
	// };

	// onButtonPress() {
	// 	const { email, password } = this.state;

	// 	//handle sign in a user with email and password
	// }

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChanged(text) {
		this.props.passwordChanged(text);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.props.email}
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.props.password}
						onChangeText={this.onPasswordChanged.bind(this)}
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

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	}
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);