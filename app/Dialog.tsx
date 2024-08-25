import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Divider,
  Dialog as MuiDialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Dialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <MuiDialog open={open} onClose={() => setOpen(false)}>
        <DialogContent
          sx={{
            width: 330,
            m: 0,
            p: 0,
            backgroundColor: "#333",
            color: "white",
          }}
        >
          <Box sx={{ position: "relative", width: 330, height: 179 }}>
            <Image
              src="https://cloudinary-cdn.ffm.to/s--17oGWJxM--/f_jpg/https%3A%2F%2Fimagestore.ffm.to%2Flink%2F4a7ef3941213694024ca0557fb8dcddb.jpg"
              fill
              style={{
                objectFit: "cover",
              }}
              alt="Image"
            />
          </Box>
          <Box padding="20px">
            <Stack gap={2}>
              <Typography align="center" variant="h2">
                Danny Sucks
              </Typography>
              <Divider sx={{ backgroundColor: "white" }} />
              <Typography>
                Do something with something. Denis Lipari manages a dumb band.
              </Typography>
              <TextField
                variant="filled"
                placeholder="Email"
                sx={{
                  backgroundColor: "#ccc",
                  borderRadius: "4px",
                  ".MuiFilledInput-input": {
                    padding: "10px",
                  },
                  ".MuiFilledInput-root::after": {
                    display: "none",
                  },
                }}
              />
              <Button
                variant="outlined"
                fullWidth
                color="custom"
                sx={{ textTransform: "capitalize" }}
              >
                Sign Up
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </MuiDialog>
    </>
  );
};

export default Dialog;
