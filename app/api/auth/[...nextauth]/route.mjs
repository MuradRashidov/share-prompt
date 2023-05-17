const { default: NextAuth } = require("next-auth/next");
import user from "@models/user.mjs";
import { connectToDB } from "@utils/database";
import GoogleProvider from "next-auth/providers/google";
//import { signIn } from "next-auth/react";
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    async session ({session}){
        const sessionUser = await user.findOne({
            email:session.user.email
        });
        session.user.id  =  sessionUser._id.toString();
        return session;

    },
    async  signIn( {profile}){
        try{
           await connectToDB();
           const userExcist = await user.findOne({email:profile.email});
           if(!userExcist){
            await  user.create({
                  image:profile.image,
                  username:profile.name.replace(" ","").toLowerCase(),
                  image:profile.image

              })
           }
           return true;
        }
        catch(err){
            console.log(err);
            return false
        }

    }

})
export {handler as GET, handler as POST};