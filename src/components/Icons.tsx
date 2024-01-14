import { LucideProps, User } from "lucide-react";
import Image from "next/image";

export const Icons = {
  user: User,
  logo: () => (
    <Image
      src="/eva-white.png"
      alt="eva - logo"
      width={40}
      height={40}
      quality={100}
    />
  ),
};
