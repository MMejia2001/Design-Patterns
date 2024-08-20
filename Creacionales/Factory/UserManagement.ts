
import { IUser } from './IUser';
import { UserFactory } from './userFactory';

export class UserManagement {
    public createUser(type: string, id: number, name: string): IUser {
        return UserFactory.createUser(type, id, name);
    }
}