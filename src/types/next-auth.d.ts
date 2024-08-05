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
