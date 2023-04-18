import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserAuthentication } from './authentication.controller';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule, UserModule],
  controllers: [UserAuthentication],
  providers: [LocalStrategy],
})
export class AuthenticationModule {}