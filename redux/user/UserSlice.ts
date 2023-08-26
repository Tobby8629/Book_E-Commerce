// const { createAsyncThunk, createSlice, PayloadAction } = require("@reduxjs/toolkit")

// const base = 'http://localhost:3001/'
// interface User {
//   firstname: string;
//   lastname: string;
//   username: string;
//   description: string;
//   email: string;
//   password: string;
// }

// interface UserData {
//   data: User; 
//   status: {
//     errors: string[];
//   };
// }


// export const createUser = createAsyncThunk ("user/createUser", async(payload) => {
//    const ree = {
//      firstname: payload.firstname,
//      lastname: payload.lastname,
//      username: payload.username,
//      description: payload.description,
//      email: payload.email,
//      password: payload.password
//    }
//     const res = await fetch(`${base}/users/signup`,{
//     method: 'post',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({user: ree})
//   })

//   const data = await res.json()
//   return data
// }) 

// const initialState = {
//   status: false,
//   error: []
// }

// const user = createSlice({
//   name: 'user',
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(createUser.fulfilled, (state, action)=>{
//       const person = action.payload
//       if(person.data) {
//         localStorage.setItem("user", JSON.stringify(person.data))
//         state.error = []
//         state.status = true
//       }
//       else {
//         state.error = person.status.errors
//         console.log(state.error)
//         state.status = false
//       }
//     })
//   }
// })

// export default user.reducer

import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const base = 'http://localhost:3001/';

interface User {
  firstname: string;
  lastname: string;
  username: string;
  description: string;
  email: string;
  password: string;
}

interface Users {
  email: string;
  password: string;
}

interface UserData {
  data: User; 
  status: {
    errors: string[];
  };
}

export const createUser = createAsyncThunk<UserData, User>(
  "user/createUser",
  async (payload) => {
    const ree = {
      firstname: payload.firstname,
      lastname: payload.lastname,
      username: payload.username,
      description: payload.description,
      email: payload.email,
      password: payload.password,
    };

    const res = await fetch(`${base}/users/signup`, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ user: ree }),
    });

    const data = res.json();
    return data;
  }
);

export const LogUser = createAsyncThunk<UserData, Users>(
  "user/LogUser",
  async (payload) => {
    const ree = {
      email: payload.email,
      password: payload.password,
    };

    const res = await fetch("http://localhost:3001/users/login", {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({user: ree}),
    });
    const data = await res.json();
    return data;
  }
);


const initialState = {
  users : {},
  status: false,
  error: [] as string[], // Initialize as an empty array of strings
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('user')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      const person = action.payload;
      if (person.data) {
        state.error = [];
        state.status = true;
      } else {
        state.error = person.status.errors;
        console.log(state.error);
        state.status = false;
      }
    });
    builder.addCase(LogUser.fulfilled, (state, action) => {
      const person = action.payload;
      if (person.data) {
        localStorage.setItem("user", JSON.stringify(person.data));
        state.error = [];
        state.users = person.data
        state.status = true;
      } else {
        state.error = person.status.errors;
        console.log(state.error);
        state.status = false;
      }
    });
  },
  
});

export default user.reducer;
export const {logout} = user.actions;
