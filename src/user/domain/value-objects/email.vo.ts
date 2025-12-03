export class Email {
  private readonly value: string;

  constructor(email: string) {
    if(!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }
    this.value = email;
  }


  private isValidEmail(email: string): boolean {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Email): boolean {
    return this.value === other.getValue();
  }
}
