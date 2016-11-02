import rest from 'restler';

let BVAMClient = {};

const API_PREFIX = '/api/v1/';

BVAMClient.connect = (opts)=>{
    opts = opts || {}
    opts.connectionString = opts.connectionString || 'https://bvam.tokenly.com';

    // ------------------------------------------------------------------------
    
    let bvamClient = {};
    
    // for a single asset name, returns the asset info
    //   for multiple asset names, returns an array of asset information
    bvamClient.getAssetInfo = (assetNameOrNames)=>{
        if (Array.isArray(assetNameOrNames)) {
            return bvamClient.call('GET', 'assets', {assets: assetNameOrNames.join(',')});
        }

        return bvamClient.call('GET', 'asset/'+assetNameOrNames);
    }

    // for a single asset name, returns the asset info
    //   for multiple asset names, returns an array of asset information
    bvamClient.addBvamData = (bvam)=>{
        return bvamClient.call('POST', 'bvam', {bvam: bvam});
    }

    bvamClient.call = function(method, urlExtension, params=null) {
        return new Promise((resolve, reject) => {
            let url = opts.connectionString+API_PREFIX+urlExtension;

            let onComplete = (result) => {
                if (result instanceof Error) {
                    reject(result)
                } else {
                    resolve(result);
                }
            }

            let options = {}
            if (method == 'GET') {
                if (params != null) { options.query = params; }
                rest.get(url, options).on('complete', onComplete);
            }
            if (method == 'POST') {
                rest.postJson(url, params, options).on('complete', onComplete);
            }
        });
    }


    // ------------------------------------------------------------------------


    return bvamClient;
}



export default BVAMClient;