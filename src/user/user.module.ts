import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/use-case/create-user.use-case';
import { InMemoryUserRepository } from './infrastructure/adapters/in-memory-user.repository';
import { USER_REPOSITORY } from './application/ports/user.repository.port';
import { UserController } from './presentattion/user.controller';
import { GetUserUseCase } from './application/use-case/get-user.use-case';
import { ListUsersUseCase } from './application/use-case/list-users.use-case';
import { DeleteUserUseCase } from './application/use-case/delete-user.use-case';
import { UpdateUserUseCase } from './application/use-case/update-user.use-case';

@Module({
  providers: [
    CreateUserUseCase,
    GetUserUseCase,
    ListUsersUseCase,
    DeleteUserUseCase,
    UpdateUserUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: InMemoryUserRepository,
    },
  ],
  imports: [],
  exports: [],
  controllers: [UserController],
})
export class UserModule {}
