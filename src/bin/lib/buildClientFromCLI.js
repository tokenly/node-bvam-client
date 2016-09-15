import BVAMClient from '../../lib';

export default function buildBVAMClient() {
    let CONNECTION = process.env.CONNECTION;

    let opts = {
        connectionString: CONNECTION,
    }

    return BVAMClient.connect(opts);    
}

