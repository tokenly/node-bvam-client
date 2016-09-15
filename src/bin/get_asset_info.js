#!/usr/bin/env node

import buildClientFromCLI from './lib/buildClientFromCLI';

let client = buildClientFromCLI();

let assetName = process.argv[2];

if (assetName.indexOf(',') > 0) {
    assetName = assetName.split(',');
}

process.stdout.write("Fetching asset info for "+JSON.stringify(assetName)+"...\n");
client.getAssetInfo(assetName).then((result)=>{
    process.stdout.write(""+JSON.stringify(result,null,4)+"\n");
}, (err)=>{
    console.error('there was an error:', err);
});

