const core = require('@actions/core');
const axios = require('axios').default;

try {
	username = core.getInput('username');
	password = core.getInput('password');

	axios.post('https://hub.docker.com/v2/users/login', {
		username: username,
		password: password
	}).then(function(response) {
		bearer_token = response.data.token;

		token_label = core.getInput('token_label');
		scopes_str = core.getInput('scopes');
		scopes = scopes_str.split(',');
		
		axios.post('https://hub.docker.com/v2/access-tokens', {
			token_label: token_label,
			scopes: scopes
		}, {
			headers: {
				'Authorization': 'Bearer ' + bearer_token
			}
		}).then(function(response) {
			core.setOutput("uuid", response.data.uuid);
			core.setOutput("token", response.data.token);
		})
	});
}
catch (error) {
	core.setFailed(error.message);
}