import prisma from "@/lib/db";
import { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useRouter } from "next/navigation";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || ("" as string),
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ("" as string),
    }),
    // ...add more providers here
  ],
  // A database is optional, but required to persist accounts in a database
  callbacks: {
    async session({ session }: { session: Session }): Promise<Session> {
      try {
        const sessionUser = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
          select: {
            id: true,
            role: true,
            username: true,
            pictureUrl: true,
          },
        });
        if (sessionUser) {
          session.user.id = sessionUser?.id;
          session.user.role = sessionUser?.role;
          session.user.pictureUrl = sessionUser?.pictureUrl as string;
          session.user.username = sessionUser?.username;
        } else {
          console.log(`SessionUser is empty look at the options.ts`);
        }
      } catch (error) {
        console.log(`Error exist in session function in options.ts, ${error}`);
      }
      // console.log(session);
      return session;
    },
    // ...other callbacks
    async signIn({ account, profile }: { account: any; profile: any }) {
      try {
        const { email, email_verified, name, picture, given_name } = profile;

        const getEmail = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        // console.log("getEmail is true or not", getEmail);

        if (getEmail) {
          console.log(`User already exist with email: ${email}`);
          return true;
        } else {
          await prisma.user.create({
            data: {
              username: given_name,
              fullName: name,
              pictureUrl: picture,
              email: email,
            },
          });
        }
      } catch (error) {
        console.log(`Error exist while singIn: ${error}`);
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
};

/* 

getEmail is true or not {
  id: '2b4a196b-793e-4ac4-a066-9a4ef07031a1',
  fullName: 'Pratyush Sinha',
  username: 'Pratyush',
  email: 'pratyushsinha982@gmail.com',
  pictureUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ1cwzEFtjhTH7CgimxjBNvdvd7RsTD-lTn68lOaWEUr51HIJY=s96-c',
  role: 'USER',
  createdAt: 2024-08-04T16:47:45.577Z,
  updatedAt: 2024-08-04T16:47:45.577Z,
  coursesId: null
}

--> account {
  provider: 'google',
  type: 'oauth',
  providerAccountId: '100338726084305849033',
  access_token: 'ya29.a0AcM612zxipy12we-8VyyJcK4mKDt2Np82rFjU40SL9CjWbEuhvngZrHiU98nZa4qbUwuhR8CQgIabSjARGnKYNWzu0JJnTVGujTtoV56ZAqc6MlpRd4BrCMTG-4QK6PXAd44mGLkWFSGe5LYWWSuj7wa97Q1JWZk_JFIaCgYKASISARISFQHGX2MiWH_AK9_Fjxdr5pZnLok1Pw0171',
  expires_at: 1722713927,
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
  token_type: 'Bearer',
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyNmQ5MTdiMWZlOGRlMTMzODJhYTdjYzlhMWQ2ZTkzMjYyZjMzZTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NTg4MDYwMjkxMDEtZWFhYjBqMjZzZWR0YjhiaXJiNHFpcmhkaTJmNmF1aGEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NTg4MDYwMjkxMDEtZWFhYjBqMjZzZWR0YjhiaXJiNHFpcmhkaTJmNmF1aGEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDAzMzg3MjYwODQzMDU4NDkwMzMiLCJlbWFpbCI6InByYXR5dXNoc2luaGE5ODJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJMbHNOQzl4OTdqcHlkXzh4Ylhoa1hnIiwibmFtZSI6IlByYXR5dXNoIFNpbmhhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0oxY3d6RUZ0amhUSDdDZ2lteGpCTnZkdmQ3UnNURC1sVG42OGxPYVdFVXI1MUhJSlk9czk2LWMiLCJnaXZlbl9uYW1lIjoiUHJhdHl1c2giLCJmYW1pbHlfbmFtZSI6IlNpbmhhIiwiaWF0IjoxNzIyNzEwMzI4LCJleHAiOjE3MjI3MTM5Mjh9.ehR0SezOcoMEPhsjXF1MfpwHk3MYxfstYIFbfftAjnAoBZWAiuvHofxCcx1rgorjfDFfw1q4KfSCdUX02KCIDfcRrgP8mZsZqmyjkiyZjD85KJ7t_Bex9IVCOE9Q4OqKBy7aUFoXQSJFbquvlfEdbRBmv3BXGptYPDyb_GO_ym2mhtxmMFezdgLxQzJp9qf6bvur8cAHvnwCGNAU_BTzd5nP30N24wbnUA6LeAdGgUoFrtltmENqlVgWJphQqZSBPkg60i0IsRfJ-PuCbIMl94HgNk6hjSd0wFIeKBAnZKS1posBKkuTEr27mqUFlmgcmVAdiP5qagJR22mjgFCAjw'
}
---> {
  iss: 'https://accounts.google.com',
  azp: '658806029101-eaab0j26sedtb8birb4qirhdi2f6auha.apps.googleusercontent.com',
  aud: '658806029101-eaab0j26sedtb8birb4qirhdi2f6auha.apps.googleusercontent.com',
  sub: '100338726084305849033',
  email: 'pratyushsinha982@gmail.com',
  email_verified: true,
  at_hash: 'LlsNC9x97jpyd_8xbXhkXg',
  name: 'Pratyush Sinha',
  picture: 'https://lh3.googleusercontent.com/a/ACg8ocJ1cwzEFtjhTH7CgimxjBNvdvd7RsTD-lTn68lOaWEUr51HIJY=s96-c',
  given_name: 'Pratyush',
  family_name: 'Sinha',
  iat: 1722710328,
  exp: 1722713928
}
*/
