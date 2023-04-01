import RsvpUpdate from "./RsvpUpdate";

async function getRsvp(rsvpId: string) {
    const res = await fetch(`${process.env.BASE_URL}/api/rsvp/${rsvpId}`, {
      cache: "no-store",
    });
    // console.log(res);
    return res.json();
  }

export default async function YourRsvp({
    params,
  }: {
    params: { rsvpId: string };
  }) {
    const data = await getRsvp(params.rsvpId);
  
    return <RsvpUpdate rsvp={data} />;
  }
  