- 2019/09/16 index.js 
```
//add env config
require("dotenv").config("");

//add bodyParser
var bodyParser = require("body-parser");

// limit body size
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
```

