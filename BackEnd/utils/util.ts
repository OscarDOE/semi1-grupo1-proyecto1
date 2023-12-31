import * as crypto from 'crypto';

function sha256Hash(input: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
}

export default sha256Hash;