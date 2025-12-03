import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/user/domain/entities/user.entety';
import { USER_REPOSITORY, UserRepositoryPort } from '../ports/user.repository.port';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  async execute(id: string) {
    return this.userRepository.delete(id);
  }
}
