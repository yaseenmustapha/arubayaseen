"use client";
import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Button,
  Navbar,
  Switch,
  Text,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

const SunIcon = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24">
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};

const MoonIcon = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24">
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function Nav() {
  // const { data: session } = useSession();
  // const { user } = session || {};
  const segment = useSelectedLayoutSegment();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label="toggle navigation"
          showIn="sm"
          style={{ paddingRight: 12 }}
        />
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="100"
          style={{ marginBottom: 32 }}
        >
          <path
            fill={isDark ? "#FFFFFF" : "#100F13"}
            d="M60.408,65.072l4.656-0.096q1.728,0,1.728,0.24q0,0.624-7.008,1.104q-4.464,8.736-4.464,11.904q0,2.208,1.392,2.208q0.528,0,1.32-0.648t0.96-0.648t0.168,0.24q-0.24,0.864-1.464,1.44t-2.064,0.576t-1.32-0.096q-1.152-0.432-1.152-2.784q0-4.848,3.696-12.336l-5.76,0.144q-6.432,6.288-12.912,11.04q-9.696,7.056-15.168,7.056q-0.336,0-0.672-0.048q-7.392-0.624-7.392-7.584q0-4.128,2.592-8.736q3.456-6.144,9.456-10.488t10.752-4.344t4.752,3.504q0,2.352-1.44,5.232t-2.928,3.648q-0.144,0.048-0.312,0.048t-0.168-0.096l1.584-2.592q1.632-2.544,1.632-4.464t-0.84-3.096t-2.664-1.176q-3.744,0-8.952,4.176t-7.92,10.272t-2.712,9.504q0,5.136,5.232,5.136q4.992,0,13.536-6.432q3.792-2.832,12.336-10.704q-1.68,0.096-3.12,0.336q-3.072,0.576-2.88-0.192q0.192-1.776,1.824-1.776q3.168,0.384,5.328,0.384q4.128-3.792,12.336-12.432q5.52-5.808,6.72-5.808q0.528,0,0.528,0.816t-0.432,2.544t-0.96,2.112q-1.104,0.768-2.064,2.088t-2.736,4.944t-3.024,5.88z M64.248,53.36l-12.288,11.52l2.832,0q1.008,0.048,2.496,0.048q1.392-2.736,6.96-11.568z M77.36016,57.824q0.528,0,0.528,1.32t-0.72,7.176l0.816,0l3.288,0t3.816-0.096q0.048,0.096,0.048,0.144q0,0.672-3.024,1.248q-1.776,0.24-5.328,0.816q-0.624,2.352-1.584,4.752t-1.536,2.4q-0.48,0-0.744-0.528t-0.12-0.96l1.488-5.472q-7.296,0-7.296-1.104q0-0.48,0.408-0.816t0.984-0.336t2.112-0.048l4.464,0q1.68-4.992,2.352-8.496l0.048,0z M103.81632,90.992q-1.824,0-3.576-1.296t-1.752-2.88q0-1.008,1.008-1.008q0.24,0,0.72,0.096q0.576,2.016,0.96,2.736q0.816,1.296,2.784,1.296q5.904,0,14.496-16.128l8.64-15.408q-9.264,9.888-13.128,13.752t-5.304,4.728q-2.88,1.728-4.752,1.728q-2.736,0-2.736-3.216q0-3.84,3.264-7.92q0.24-0.288,2.04-2.472t4.224-5.208t4.032-5.832t1.608-3.936t-0.672-1.464q-1.392-0.72-3.168-0.72q-5.088,0-14.064,6.144q-3.744,2.544-5.952,5.904t-2.208,6.192t2.736,3.552q0.864,0.24,1.68,0.24q2.448,0,5.424-2.112q3.504-2.352,3.936-2.496q-0.48,1.776-3.792,3.888q-3.648,2.256-6.816,2.256q-0.432,0-1.608-0.168t-2.328-1.752t-1.152-3.84q0-6.528,9.552-13.344q2.784-2.016,7.344-3.648t7.368-1.632t4.272,0.888t1.464,2.832t-2.688,6.048t-8.496,11.16q-1.2,1.392-2.208,3.624t-1.008,3.552t1.032,1.32t3.096-1.488q5.856-4.176,11.688-10.128t8.568-9.984q1.968-2.832,4.176-2.832q0.768,0,0.768,0.48q0,0.096-0.096,0.384q-6.048,10.56-16.464,28.032q-3.072,5.04-6.552,7.56t-6.36,2.52z"
          />
          <path fill="#" d="" />
        </svg>

        {/* <Text b color="inherit" hideIn="xs" style={{ paddingLeft: 10 }}>
          Aruba & Yaseen
        </Text> */}
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Item isActive={!segment}>
          <Link style={{ color: "inherit" }} href="/">
            Home
          </Link>
        </Navbar.Item>
        <Navbar.Item isActive={segment === "rsvp"}>
          <Link style={{ color: "inherit" }} href="/rsvp">
            RSVP
          </Link>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link
              style={{
                minWidth: "100%",
                color: "inherit",
                fontWeight: !segment ? "bold" : "normal",
              }}
              href="/"
            >
              Home
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              style={{
                minWidth: "100%",
                color: "inherit",
                fontWeight: segment === "rsvp" ? "bold" : "normal",
              }}
              href="/rsvp"
            >
              RSVP
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOff={<SunIcon />}
          iconOn={<MoonIcon />}
        />
        {/* {session ? (
          <>
            {user?.image ? (
              <Avatar src={user.image as string} zoomed />
            ) : (
              <Avatar text={user?.name?.charAt(0) as string} zoomed />
            )}
            <Navbar.Link color="inherit" onClick={() => signOut()}>
              Sign out
            </Navbar.Link>
          </>
        ) : (
          <Navbar.Item>
            <Button auto flat onClick={() => signIn()}>
              Login
            </Button>
          </Navbar.Item>
        )} */}
      </Navbar.Content>
    </Navbar>
  );
}
