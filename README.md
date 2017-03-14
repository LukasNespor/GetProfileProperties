# Get current user Profile Properties using JSOM
## App permissions
| Scope         | Permission    |
| ------------- |:-------------:|
| User Profiles (Social) | Read |

## Behavior
```
var cc = SP.ClientContext.get_current();
var peopleManager = new SP.UserProfiles.PeopleManager(cc);
var userProperties = peopleManager.getMyProperties();
cc.load(userProperties);
cc.executeQueryAsync(...)
```

Executing query sometimes ends with **System.UnauthorizedAccessException**.