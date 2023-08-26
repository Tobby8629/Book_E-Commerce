import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
			CredentialsProvider({
			  name: "credentials",
				credentials: {
					email: {label: "email", type: 'email', placeholder: "enter your email"},
					password: {label: "password", type: 'password'}
				},
			async authorize(credentials, req){
				const data = {
					email: credentials.email,
					password: credentials.password
				}
				 const res = await fetch("http://localhost:3001/users/login", {
					method: 'post',
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						user: data
					})
				 });
				 const dee = await res.json()
				 const user = dee.data.firstname
				 if(res.ok && user) {
					return user
				 }
				 else {
					return null
				 }
			}
		})
    ],

		session: {
			strategy: "jwt"
		},

  pages: {
		signIn: '/login'
	},

})