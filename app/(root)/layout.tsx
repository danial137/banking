import Sidebar from "@/components/Sidebar";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const LoggedIn = { firstNmae: "danial", LastName: "Fakhrabadi" };
    return (
        <main className=" flex h-screen w-font font-inter">
          <Sidebar user={LoggedIn} />
          {children}
        </main>
    );
}
