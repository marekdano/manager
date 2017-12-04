import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChanged(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
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

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser
})(LoginForm);