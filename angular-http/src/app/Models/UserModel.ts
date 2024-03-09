export class UserModel {
    constructor(
        public userId: string,
        public email: string,
        private _expiresIn: Date,
        private _tokenId: string
    ) { }

    //This acts as a property to get token for logged in user as field is private
    get token() {        
        if (this._expiresIn && this._expiresIn < new Date()) {
            return null;
        }
        return this._tokenId;
    }
}