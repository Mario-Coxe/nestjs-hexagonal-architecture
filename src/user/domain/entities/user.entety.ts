import { Email } from '../value-objects/email.vo';
import { UserId } from '../value-objects/user-id.vo';

export class User {
  constructor(
    public readonly id: UserId,
    public name: string,
    public email: Email,
    public readonly createAt: Date,
    public updatedAt: Date,
  ) {}

  static create(name: string, email: string) {
    if (!name || name.trim().length < 2) {
      throw new Error('Name must be at least 2 characters long');
    }

    return new User(
      new UserId(''),
      name.trim(),
      new Email(email),
      new Date(),
      new Date(),
    );
  }

  getId(): UserId {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
  getEmail(): Email {
    return this.email;
  }

  getCreatedAt(): Date {
    return this.createAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  updateName(name: string) {
    if (!name || name.trim().length < 2) {
      throw new Error('Name must be at least 2 characters long');
    }
    this.name = name;
    this.updatedAt = new Date();
  }

  updateEmail(email: string) {
    this.email = new Email(email);
    this.updatedAt = new Date();
  }

  getAccountAge(): number {
    const now = new Date();
    const diff = now.getTime() - this.createAt.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}
