import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from 'src/user/application/ports/user.repository.port';
import { User } from 'src/user/domain/entities/user.entety';

@Injectable()
export class InMemoryUserRepository implements UserRepositoryPort {
  private readonly users: Map<string, User> = new Map();

  async save(user: User): Promise<User> {
    this.users.set(user.getId().getValue(), user);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.getEmail().getValue() === email) {
        return user;
      }
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async delete(id: string): Promise<void> {
    this.users.delete(id);
  }
}
