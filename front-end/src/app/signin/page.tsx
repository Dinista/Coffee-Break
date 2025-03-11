import { Form } from "@/components/form";
import { NotificationProvider } from "@/context/notificationcontext";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-background">
      <div className="flex flex-row-reverse items-end">
        <Image
          alt="illustration"
          width={300}
          height={300}
          loading="eager"
          priority
          src={"/jumping.svg"}
          quality={100}
        />
        <h1 className="text-2xl -mr-20 font-pacifico text-white">
          Let&apos;s <br />
          grab <br /> a coffee!
        </h1>
      </div>
      <NotificationProvider>
        <Form />
      </NotificationProvider>
    </div>
  );
}
