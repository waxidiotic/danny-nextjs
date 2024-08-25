"use client";

import { Button } from "@mui/material";
import Dialog from "./Dialog";
import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <main style={{}}>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Dialog open={open} setOpen={setOpen} />
    </main>
  );
}
