import { randomBytes, randomUUID } from 'crypto';
import NextAuth from 'next-auth';
import { AppProviders } from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { prisma } from '@server/db/client';

const {
    GOOGLE_OAUTH_CLIENTID,
    GOOGLE_OAUTH_SECRET
} = process.env;

const providers: AppProviders = [];

if (!GOOGLE_OAUTH_CLIENTID || !GOOGLE_OAUTH_SECRET) {
    throw new Error('GOOGLE_OAUTH_CLIENTID and GOOGLE_OAUTH_SECRET must be set');
}

providers.push(
    GoogleProvider({
        clientId: GOOGLE_OAUTH_CLIENTID,
        clientSecret: GOOGLE_OAUTH_SECRET,
        authorization: {
            params: {
                prompt: 'consent',
                access_type: 'offline',
                response_type: 'code'
            }
        }
    })
);

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_URL,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
        generateSessionToken: () => randomUUID?.() ?? randomBytes(32).toString('hex')
    },
    callbacks: {
        jwt({token, account, user}) {
            if (account) {
                token.accessToken = account.access_token;
                token.userId = user.id;
            }
            return token;
        },
        async session({session, token, user}) {
            session.user.id = token.userId;

            return session;
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        }
    },
    providers
});
