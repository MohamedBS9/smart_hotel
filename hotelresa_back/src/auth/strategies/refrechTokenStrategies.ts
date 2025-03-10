import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
type JWTPayload={
    sub:string,
    username:string
}

export class RefrechTokenStrategy extends PassportStrategy(Strategy,'refrech-jwt'){
    constructor(){
        const jwtRefrechAccessSecret=process.env.Jwt_REFRESH_SECRET
        if(!jwtRefrechAccessSecret){
            throw new Error("Jwt_REFRESH_SECRET n' existe pas")
    }
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:jwtRefrechAccessSecret,
        passReqToCallback:true
    })
    }
    validate(req:Request,payload:JWTPayload) {
       const authHeader=req.get('Authorization')
       if (!authHeader){
        throw new UnauthorizedException('Authorization header is missing')
       }
       const RefrechToken=authHeader.replace('Bearer','').trim()
       return {...payload,RefrechToken}
    }

}