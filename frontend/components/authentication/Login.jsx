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
  loginUser,
  saveuserToLocalStorage,
} from "../../src/handlers/authHandler";
import { useRouter } from "next/dist/client/router";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginUser(email, password);
    saveuserToLocalStorage(user);
    router.push("/");
  };

  return (
    <CssVarsProvider>
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
          <Typography level="body2">Sign in to continue.</Typography>
        </div>
        <TextField
          // html input attribute
          onChange={(e) => setEmail(e.target.value)}
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
        <Button
          onClick={(e) => handleSubmit(e)}
          sx={{ mt: 1 /* margin top */ }}
        >
          Log in
        </Button>
        <Typography
          endDecorator={
            <Link href="/sign-up">
              <MuiLink>Sign in</MuiLink>
            </Link>
          }
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}

export default Login;
