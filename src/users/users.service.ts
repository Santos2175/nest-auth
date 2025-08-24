import { Injectable } from "@nestjs/common";

export type User = {
    userId:number;
    username:string;
    password:string;
};

@Injectable()
export class UsersService{
    private readonly users:User[] = [
        {
            userId:1,
            username:"santosh1234",
            password:"santosh1234"
        },
        {
            userId:2,
            username:"rakesh1234",
            password:"rakesh1234"
        }
    ];

    async findOne(username:string):Promise<User|undefined>{
        return this.users.find(user=>user.username===username)
    }
}