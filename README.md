keen.io site check sample
=====

This simple script checks web site response time and status. Results are stored to keen.io service for later querying.
Keen.io provides simple storage for various event data collected from apps, sites, IoT devices, etc.

# Used libraries:
- keen.io
- unirest

# Usage

All configuration is done in appConfig.js

```javascript
var config = {
    keenConfig : {
        projectId: "keen.io projectId",
        writeKey: "keen.io write key",
        readKey: "keen.io projectId read key",
        masterKey: "master key"
    },
    siteURL: "http://sitetotest.URL",
    responseTimeout: numberOfMilliseconds,
    responseRepeatDelay: numberOfMilliseconds
};
```


# Roadmap
This is just one of samples scripts in my "code every day" project. No future development is planed.


