import {  Controller, Post, UseGuards, Req, Res, Request } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
// import { Request, Response } from "express";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationGuard } from "./guards/authentication.guard";

@Controller("auth")
export class UserAuthentication {
    constructor(private readonly authenticationService: AuthenticationService) {}

    // with using Passport library
    @Post("/login")
    // @UseGuards(AuthGuard("local"))
    login(@Request() req) {
        console.log("req: ", req.body)
        return this.authenticationService.generateToken(req.body)
    }


    // without using Passsport library
    // @Post("/login")
    // @UseGuards(AuthenticationGuard)
    // login(@Req() request: Request, @Res() response: Response) {
    //     console.log("req: ", request.body)
   
        
    //     return this.authenticationService.generateToken(request.body)
 
    //     // return "Successfully logged in."
    // }
}