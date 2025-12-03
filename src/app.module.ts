import { Module } from '@nestjs/common';
import { User } from './user/domain/entities/user.entety';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
