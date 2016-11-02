#!/usr/bin/env node

import buildClientFromCLI from './lib/buildClientFromCLI';

let client = buildClientFromCLI();

let assetName = process.argv[2];
let name = process.argv[3];

let bvam = {
    asset: assetName,
    name: name
}

process.stdout.write("Posting BVAM data: "+JSON.stringify(bvam,null,2)+"...\n");
client.addBvamData(bvam).then((result)=>{
    process.stdout.write(""+JSON.stringify(result,null,4)+"\n");
}, (err)=>{
    console.error('there was an error:', err);
});

