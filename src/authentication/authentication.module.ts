import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserAuthentication } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule, UserModule, JwtModule.register({
    secret: "key",
    signOptions: {
      expiresIn: "60s"
    }
  })],
  controllers: [UserAuthentication],
  providers: [LocalStrategy, AuthenticationService],
  exports: [AuthenticationService]
})
export class AuthenticationModule {}