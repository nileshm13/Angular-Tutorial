import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {
    constructor(private loggerService: LoggerService) {

    }

    users: User[] = [
        new User('Nilesh Mehta', 'Male', 'Yearly', 'Active'),
        new User('Rohit Verma', 'Male', 'Montly', 'InActive'),
        new User('Nisha Sharma', 'Female', 'Quarterly', 'Active'),
        new User('Simran Kaur', 'Female', 'Yearly', 'Active'),
    ]
    selectedUserEvent: EventEmitter<User> = new EventEmitter<User>();

    OnSelectedUserEvent(selectedUser: User) {
        this.selectedUserEvent.emit(selectedUser);       
    }

    getAllUsers() {
        return this.users;
    }

    createUser(name: string, gender: string, subscriptionType: string, status: string) {
        let user = new User(name, gender, subscriptionType, status);
        this.users.push(user);
        this.loggerService.LogMessage(name, status);
    }

}