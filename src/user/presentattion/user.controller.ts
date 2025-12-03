import { Body, Controller, Post } from "@nestjs/common";
import * as createUserUseCase from "../application/use-case/create-user.use-case";
import { User } from "../domain/entities/user.entety";

@Controller('users')
export class UserController {
    constructor(private createUserUseCase: createUserUseCase.CreateUserUseCase) {}

    @Post()
    async createUser(@Body() request: createUserUseCase.CreateUserDto){
        const user = await this.createUserUseCase.execute(request)
        return this.toResponse(user);
    }


    private toResponse(user: User){
        return {
            id: user.getId().getValue(),
            name: user.getName(),
            email: user.getEmail().getValue(),
            createdAt: user.getCreatedAt(),
            updatedAt: user.getUpdatedAt(),
            AccountAge: user.getAccountAge(),
        }
    }
}