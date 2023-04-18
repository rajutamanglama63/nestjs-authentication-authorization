import {  Controller, Post, UseGuards, Req, Res } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { AuthenticationGuard } from "./guards/authentication.guard";

@Controller("auth")
export class UserAuthentication {
    constructor() {}

    // with using Passport library
    // @Post("/login")
    // @UseGuards(AuthGuard("local"))
    // login(@Request() req) {
    //     return req.user
    // }


    // without using Passsport library
    @Post("/login")
    @UseGuards(AuthenticationGuard)
    login(@Req() request: Request, @Res() response: Response) {
        console.log("req: ", request.body)
        return "Successfully logged in."
    }
}