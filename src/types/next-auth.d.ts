import { DefaultSession } from 'next-auth';

declare module "next-auth" {
    interface Session {
        accessToken: string,
        user: {
            id: string,
            address: string
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userId: string
    }
}
