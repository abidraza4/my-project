import Sidebar from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Remove the session retrieval since it's commented out
  // const session = await useAuthServer();

  // Remove the user data retrieval since it's commented out
  // const { data: user } = await spServerClient()
  //   .from("users")
  //   .select("*")
  //   .eq("id", session?.user.id!)
  //   .single();

//   if (!session) {
//     redirect("/login");
//   }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex">
        {/* <Sidebar /> */}
      </div>
      {/* <div className="lg:-z-10">
        <Sidebar />
      </div> */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
        <main className="h-full">
          {/* <div className="mx-auto max-w-screen-2xl 2xl:p-10 bg-[#f2f5f9] min-h-full"> */}
            {children}
          {/* </div> */}
        </main>
      </div>
    </div>
  );
}
