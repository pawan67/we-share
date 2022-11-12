import {
  Button,
  CssVarsProvider,
  Link as MuiLink,
  TextField,
  Typography,
  Sheet,
} from "@mui/joy";
import React from "react";
import Link from "next/link";
import {
  registerUser,
  saveuserToLocalStorage,
} from "../../src/handlers/authHandler";
import { useRouter } from "next/dist/client/router";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const user = await registerUser(name, email, password);
    saveuserToLocalStorage(user);
    router.push("/");
  };

  return (
    <CssVarsProvider varient="outline">
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign up to continue.</Typography>
        </div>
        <TextField
          onChange={(e) => setName(e.target.value)}
          // html input attribute
          name="name"
          type="text"
          placeholder="John Doe"
          // pass down to FormLabel as children
          label="Full name"
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          // pass down to FormLabel as children
          label="Email"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
          label="Password"
        />
        <TextField
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="cpassword"
          type="password"
          placeholder="Confirm password"
          label="Confirm Password"
        />
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="outline"
          sx={{ mt: 1 /* margin top */ }}
        >
          Sign up
        </Button>
        <Typography
          endDecorator={
            <Link href="/">
              <MuiLink>Sign in</MuiLink>
            </Link>
          }
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}

export default SignUp;
