import { User } from "src/user/domain/entities/user.entety";

export interface UserRepositoryPort {
    save(user: User): Promise<User> | User;
    findById(id: string): Promise<User | null> | User;
    findByEmail(email: string): Promise<User | null> | User; 
    findAll(): Promise<User[]> | User[];
    delete(id: string): Promise<void> | User;
}

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');