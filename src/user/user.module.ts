import { Module } from "@nestjs/common";
import { CreateUserUseCase } from "./application/use-case/create-user.use-case";
import { InMemoryUserRepository } from "./infrastructure/adapters/in-memory-user.repository";
import { USER_REPOSITORY } from "./application/ports/user.repository.port";
import { UserController } from "./presentattion/user.controller";

@Module({
    providers: [CreateUserUseCase,
        {
            provide: USER_REPOSITORY,
            useClass: InMemoryUserRepository,
        }
    ],
    imports: [],
    exports: [],
    controllers: [UserController],
})

export class UserModule {

}