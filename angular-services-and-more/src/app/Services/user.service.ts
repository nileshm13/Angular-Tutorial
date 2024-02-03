import { User } from "../Models/User";

export class UserService {
    users: User[] = [
        new User('Nilesh Mehta', 'Male', 'Yearly', 'Active'),
        new User('Rohit Verma', 'Male', 'Montly', 'InActive'),
        new User('Nisha Sharma', 'Female', 'Quarterly', 'Active'),
        new User('Simran Kaur', 'Female', 'Yearly', 'Active'),
    ]

    getAllUsers() {
        return this.users;
    }

    createUser(name: string, gender: string, subscriptionType: string, status: string) {
        let user = new User(name, gender, subscriptionType, status);
        this.users.push(user);
    }

}