import * as React from "react";
import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
import { Tab } from "@mui/joy";
import { createPost } from "../../src/handlers/postsHandler";
export default function AddPhoto() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [caption, setCaption] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const postImage = (pics) => {
    console.log(pics);

    if (
      pics.type === "image/jpg" ||
      pics.type === "image/jpeg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "helloworld");
      data.append("cloud_name", "dewctbby3");
      fetch("https://api.cloudinary.com/v1_1/dewctbby3/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url.toString());
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("Please Select an Image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const post = await createPost(caption, image);
      //   reload page
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <AddAPhotoRoundedIcon onClick={() => setOpen(true)} />

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Add Photo
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Show world what you&apos;re up to! ❤️
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(event);
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <TextField
                onChange={(e) => setCaption(e.target.value)}
                label="Caption"
                autoFocus
                required
              />

              <Button variant="soft" component="label">
                Upload Image
                <input
                  onChange={(e) => postImage(e.target.files[0])}
                  type="file"
                  hidden
                />
              </Button>

              <Button disabled={loading} type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
