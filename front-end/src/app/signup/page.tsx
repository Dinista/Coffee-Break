import SingUpForm from "@/components/signupForm";
import { NotificationProvider } from "@/context/notificationcontext";
import Image from "next/image";

export default function SingUp() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-background">
      <Image
        alt="illustration"
        width={300}
        height={300}
        loading="eager"
        priority
        src={"/Doggie.svg"}
        quality={100}
      />
      <NotificationProvider>
        <SingUpForm />
      </NotificationProvider>
    </div>
  );
}
