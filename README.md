# Docker Hub Create Access Token 

Create a Docker Hub access token using Docker Hub API

## Inputs

## `username`

**Required** The username of the Docker Hub account to authenticate with

## `password`

**Required** The password or personal access token (PAT) of the Docker Hub account to authenticate with

## `token_label`

**Required** Label of the access token that will be created

## `scopes`


## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `uuid`

UUID of created access token

## `token`

Created access token

## Example usage

uses: actions/docker-hub-create-access-token-action@v1.0
with:
	username: "my-username"
	password: "my-password"
	token_label: "my-token-label"
	scopes: "repo:read,repo:write"