export interface JwtPayload {
    name: string
    sub: number
    email: string
    role: string
    iat?: number
    exp?: number
}
