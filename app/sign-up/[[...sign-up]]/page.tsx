"use client";

import Container from "@/components/container";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <Container className="flex justify-center h-[50vh] items-center">
      <SignUp />
    </Container>
  );
}
