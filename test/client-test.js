import should from 'should';
import sinon from 'sinon';
import BVAMclient from '..';

describe('The bvam client', () => {
    it('should call get_asset_info', () => {
        let client = BVAMclient.connect({connectionString: 'http://foo.bar'});
        let stub = sinon.stub(client, 'call', emptyPromise);
        client.getAssetInfo('TOKENLY');
        sinon.assert.calledWith(stub, 'GET', 'asset/TOKENLY');
    });
    it('should return multiple asset info', () => {
        let client = BVAMclient.connect({connectionString: 'http://foo.bar'});
        let stub = sinon.stub(client, 'call', emptyPromise);
        client.getAssetInfo(['TOKENLY','SOUP']);
        sinon.assert.calledWith(stub, 'GET', 'assets', {assets: 'TOKENLY,SOUP'});
    });
    it('should post BVAM data', () => {
        let client = BVAMclient.connect();
        let stub = sinon.stub(client, 'call', emptyPromise);
        client.addBvamData({asset: 'FOOBAR', name: 'My Foo Bar'});
        sinon.assert.calledWith(stub, 'POST', 'bvam', {bvam: {asset: 'FOOBAR', name: 'My Foo Bar'}});
    });
});

function emptyPromise(method, url, args) {
    return new Promise((accept, reject)=>{
    });
}