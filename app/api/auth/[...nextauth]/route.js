// import connectDb from '@/db/connectDb'
// import User from '@/models/User'
// import NextAuth from 'next-auth'
// import GithubProvider from "next-auth/providers/github"

// export const authoptions = NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     })
//   ],
//       callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       if (account.provider =="github") {
//         await connectDb()
//         const currentuser = await User.findOne({email:email})
//         if (!currentuser) {
//           const newuser = await User.create({
//              email: user.email, 
//               username: user.email.split("@")[0], 
//           })
// console.log(newuser)
//         }
//         return true
//       }
//     },
//     async session({ session, user, token }) {
//         const dbUser = await User.findOne({email: session.user.email})
//         session.user.name = dbUser.username
//         console.log("db",dbUser )
//         return session
//       },
//   }
// })

// export { authoptions as GET, authoptions as POST }




import NextAuth from "next-auth"
import connectDb from '@/db/connectDb'
import User from '@/models/User'
import GitHubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (account.provider === "github") {
        await connectDb();
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }
        return true;
      }
    },
    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  }
});

export { handler as GET, handler as POST };

