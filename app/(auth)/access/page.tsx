import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "@/app/components/LoginForm";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen gap-5 lg:gap-10 flex flex-col w-full mx-auto custom-container items-center justify-start p-5 lg:p-20">
      <div className="flex flex-col-reverse lg:flex lg:flex-row items-start gap-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
