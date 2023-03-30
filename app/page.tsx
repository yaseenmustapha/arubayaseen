"use client";

import { Button, Container, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <Spacer />
        <Container gap={0}>
          <Text
            h1
            size={60}
            css={{
              lineHeight: "1.1",
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Welcome to Aruba & Yaseen's Wedding App!
          </Text>
          <Text
            h1
            size={40}
            css={{
              lineHeight: "1.2",
            }}
            weight="medium"
          >
            More features coming soon
          </Text>
          <Link href="/rsvp">
            <Button
              color="gradient"
              shadow
              style={{ marginBottom: 12 }}
              size="lg"
            >
              RSVP
            </Button>
          </Link>
        </Container>
      </Container>
    </main>
  );
}
