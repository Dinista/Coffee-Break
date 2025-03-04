import { Form } from "@/components/form";
import { NotificationProvider } from "@/context/notificationcontext";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-background">
      <Image
        alt="illustration"
        width={300}
        height={300}
        loading="eager"
        priority
        src={"/jumping.svg"}
        quality={100}
      />
      <NotificationProvider>
        <Form />
      </NotificationProvider>
    </div>
  );
}
