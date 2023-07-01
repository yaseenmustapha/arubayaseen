import { formatDate } from "@/lib/utils";

async function getAllRsvp() {
  const res = await fetch(`${process.env.BASE_URL}/api/getAllRsvp`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Admin() {
  // const data: {
  //   id: string;
  //   email: string;
  //   firstName: string;
  //   lastName: string;
  //   quantity: number;
  //   createdAt: string;
  // }[] = await getAllRsvp();

  // const total = data.length;
  // const totalGuests = data.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <main>
      <p>test</p>
    </main>
    // <main>
    //   <div className="max-w-2xl mx-auto -mt-36">
    //     <p className="font-gilda text-xl font-bold text-center">RSVPs</p>
    //     <p className="font-gilda text-lg font-bold text-center mb-4">
    //       Total: {total} groups, {totalGuests} guests
    //     </p>
    //     <div className="w-full overflow-hidden rounded-lg shadow-xs">
    //       <div className="w-full overflow-x-auto">
    //         <table className="w-full whitespace-no-wrap">
    //           <thead>
    //             <tr className="text-xs font-medium tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
    //               {/* <th className="px-4 py-3">ID</th>
    //               <th className="px-4 py-3">Email</th> */}
    //               <th className="px-4 py-3">First Name</th>
    //               <th className="px-4 py-3">Last Name</th>
    //               <th className="px-4 py-3">Number of Guests</th>
    //               <th className="px-4 py-3">Date</th>
    //             </tr>
    //           </thead>
    //           <tbody className="bg-white divide-y divide-gray-200 text-gray-700 text-sm">
    //             {data.map((rsvp) => (
    //               <tr key={rsvp.id}>
    //                 {/* <td className="px-4 py-3">{rsvp.id}</td>
    //                 <td className="px-4 py-3">{rsvp.email}</td> */}
    //                 <td className="px-4 py-3">{rsvp.firstName}</td>
    //                 <td className="px-4 py-3">{rsvp.lastName}</td>
    //                 <td className="px-4 py-3">{rsvp.quantity}</td>
    //                 <td className="px-4 py-3">{formatDate(rsvp.createdAt)}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
