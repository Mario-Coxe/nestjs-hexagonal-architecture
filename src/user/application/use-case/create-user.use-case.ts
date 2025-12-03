import { User } from 'src/user/domain/entities/user.entety';
import * as userRepositoryPort from '../ports/user.repository.port';
import { Inject } from '@nestjs/common';

export interface CreateUserDto {
  name: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(
    @Inject(userRepositoryPort.USER_REPOSITORY)
    private readonly userRepository: userRepositoryPort.UserRepositoryPort,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user = User.create(dto.name, dto.email);
    return this.userRepository.save(user);
  }
}
