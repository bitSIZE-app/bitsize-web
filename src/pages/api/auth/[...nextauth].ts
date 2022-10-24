import NextAuth from 'next-auth';
import { AppProviders } from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';

const {
    GOOGLE_OAUTH_CLIENTID,
    GOOGLE_OAUTH_SECRET
} = process.env;

const providers: AppProviders = [];

if (!GOOGLE_OAUTH_CLIENTID || !GOOGLE_OAUTH_SECRET) {
    throw new Error('GOOGLE_OAUTH_CLIENTID and GOOGLE_OAUTH_SECRET must be set');
}

providers.push (
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
    providers
});
