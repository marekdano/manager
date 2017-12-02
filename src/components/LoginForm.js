import React, { Component } from 'react';
import { connect } from 'react-native';
import { emailChanged } from '../actions';
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
		this.props.emailChanged(text)
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

const mapStateToProps = state => {
	return {
		email: state.auth.email
	}
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);