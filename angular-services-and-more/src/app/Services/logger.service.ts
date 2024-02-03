import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService{
    LogMessage(name: string,status: string)
    {
        console.log('A new user with user name '+ name + ' and status ' + status + ' is added to user list');
    }
}