import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string;
    username?: string;
    email: string;
    pictureUrl?: string;
    image?: string;
    role?: string;
  }

  interface Profile {
    email: string;
    email_verified: boolean;
    name: string;
    picture: string;
    given_name: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string;
      username?: string;
      email: string;
      pictureUrl?: string;
      image?: string;
      role?: string;
    };
  }
}
