"use client";

import { useEffect } from "react";

import { Button, Container } from "@/components/ui";
// Error components must be Client Components

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {}, [error]);

  return (
    <Container className="flex flex-col items-center justify-center gap-3 p-10">
      <h2 className="text-3xl font-semibold">Something went wrong</h2>
      <div>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </Container>
  );
};

export default Error;
