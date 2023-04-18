import {  Controller, Post, UseGuards, Body, Req, Res } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { CreateUserDTO } from "src/user/dto/create-user.dto";
import { AuthenticationGuard } from "./guards/authentication.guard";

@Controller("auth")
export class UserAuthentication {
    constructor() {}

    @Post("/login")
    // @UseGuards(AuthGuard("local"))
    @UseGuards(AuthenticationGuard)
    login(@Req() request: Request, @Res() response: Response) {
        console.log("req: ", request.body)
        return "Successfully logged in."
    }
}