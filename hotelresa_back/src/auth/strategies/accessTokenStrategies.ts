import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
type JWTPayload={
    sub:string,
    username:string
}

export class AccessTokenStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
        const jwtAccessSecret=process.env.Jwt_ACCESS_SECRET
        if(!jwtAccessSecret){
            throw new Error("Jwt_ACCESS_SECRET n'est pas existe")
    }
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:jwtAccessSecret
    })
    }
    validate(payload:JWTPayload) {
       return payload 
    }
}