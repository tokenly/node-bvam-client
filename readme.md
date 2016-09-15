# A BVAM API client for node

## Usage Example

```node
var BVAMClient = require('node-xcpd-client');

var client = BVAMClient.connect({connectionString: 'https://bvam.tokenly.com'});

client.getAssetInfo(['TOKENLY','SOUP']).then(function(assetsInfo) {
    console.log('assetsInfo', assetsInfo);

    // The result looks something like this:
    // [
    //     {
    //         "asset": "TOKENLY",
    //         "assetInfo": {
    //             "description": "Tokenly.co",
    //             "issuer": "12717MBviQxttaBVhFGRP1LxD8X6CaW452",
    //             "divisible": true
    //         },
    //         "metadata": {
    //             "asset": "TOKENLY",
    //             "description": "Tokenly.co"
    //         },
    //         "validated": false
    //     },
    //     {
    //         "asset": "SOUP",
    //         "hash": "T2JAC8ix9g6PhsmKbeiXjtd2yEfCZ",
    //         "uri": "https://bvam.tokenly.com/T2JAC8ix9g6PhsmKbeiXjtd2yEfCZ.json",
    //         "assetInfo": {
    //             "asset": "SOUP",
    //             "description": "T2JAC8ix9g6PhsmKbeiXjtd2yEfCZ",
    //             "divisible": true
    //         },
    //         "metadata": {
    //             "asset": "SOUP",
    //             "name": "Devon's Soup",
    //             "short_name": "Soup",
    //             "description": "All soup, all the time",
    //             "website": "https://devonweller.com",
    //             "meta": {
    //                 "bvam_version": "1.0.0",
    //                 "generated_by": "Devon"
    //             }
    //         },
    //         "bvamString": "{\n    \"asset\": \"SOUP\",\n    \"name\": \"Devon's Soup\",\n    \"short_name\": \"Soup\",\n    \"description\": \"All soup, all the time\",\n    \"website\": \"https://devonweller.com\",\n    \"meta\": {\n        \"bvam_version\": \"1.0.0\",\n        \"generated_by\": \"Devon\"\n    }\n}\n",
    //         "validated": true
    //     }
    // ]

}, function (err) {
    console.error('there was an error: ', err);
});
```

