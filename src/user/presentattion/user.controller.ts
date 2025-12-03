import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '../domain/entities/user.entety';
import {
  CreateUserDto,
  CreateUserUseCase,
} from '../application/use-case/create-user.use-case';
import { GetUserUseCase } from '../application/use-case/get-user.use-case';
import { DeleteUserUseCase } from '../application/use-case/delete-user.use-case';
import { UpdateUserDto, UpdateUserUseCase } from '../application/use-case/update-user.use-case';
import { ListUsersUseCase } from '../application/use-case/list-users.use-case';

@Controller('users')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getUserUseCase: GetUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private listUsersUseCase: ListUsersUseCase,
  ) {}

  @Post()
  async createUser(@Body() request: CreateUserDto) {
    const user = await this.createUserUseCase.execute(request);
    return this.toResponse(user);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.getUserUseCase.execute(id);
    return this.toResponse(user);
  }

  @Get()
  async listUsers() {
    const users = await this.listUsersUseCase.execute();
    return users.map((user) => this.toResponse(user));
  }

  @Delete(':id') async deleteUser(@Param('id') id: string) {
    await this.deleteUserUseCase.execute(id);
    //return { message: 'User deleted successfully' };
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ) {
    const user = await this.updateUserUseCase.execute(id, body);
    return this.toResponse(user);
  }

  private toResponse(user: User) {
    return {
      id: user.getId().getValue(),
      name: user.getName(),
      email: user.getEmail().getValue(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
      AccountAge: user.getAccountAge(),
    };
  }
}
