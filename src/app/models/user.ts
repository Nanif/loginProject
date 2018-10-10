export class User {
    constructor(
        public id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public photo: string,
        public type: string,
        public created_at: string,
        public updated_at: string,
        public access_token: any
        
    ) { }
}