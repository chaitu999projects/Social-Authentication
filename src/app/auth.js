import NextAuth from "next-auth";
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const {auth, handlers:{GET, POST}} = NextAuth({
    providers:[
        GitHub({
            clientId:process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET
        })
    ], secret: process.env.SECRET_NAME
})