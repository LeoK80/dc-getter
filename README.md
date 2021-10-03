# dc-getter
Discourse API getter client. Get info out your discourse server.

## Env Vars
- HOST - set the hostname of your discourse server (```forum.example.com```)
- API_KEY - set the generated discourse user API key
- API_USERNAME - set the username for which the API key was generated

## /user-info
Gets a JSON Array of User objects.
- requires admin API key.
`In order to retrieve all usernames a call is made to path /admin/users/list/active.json`

### User
A User object is a lightweight version of the Discourse user (https://www.api.example.com/u/${username}.json) and defined by having the following properties:

| Property | Discourse Mapping |
| --- | --- |
| id  | user.id |
| name | user.username |
| characterName | user.user_fields.8 |
| characterClass | user.user_fields.9 |
| race | user.user_fields.10 |
| group | user.primary_group_name |

