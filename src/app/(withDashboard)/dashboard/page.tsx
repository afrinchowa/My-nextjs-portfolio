import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session =await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
     {session?.user && (
      <>
       <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.name}</h1>
      <h1 className="text-4xl text-center mt-10">Logged in user email: {session?.user?.email}</h1>
      <Image src={session?.user?.image || "https://plus.unsplash.com/premium_vector-1720740375507-2c946054580f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} width={100} height={100} className="mx-auto rounded-full mt-5" alt="user image" />
     
      </>
       )
     }
    </div>
   
  );
};

export default DashboardPage;
