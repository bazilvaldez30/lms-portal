/* import Image from "next/image";
import React, { MouseEvent, use } from "react";
import { useSocialLogin } from "../shared/hooks";

export default function SocialLoginButton({
  social,
}: {
  social: ISocialLoginData;
}) {
  const { handleLoginSocial } = useSocialLogin();

  const handleClick = () => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleLoginSocial(social.name);
  };

  return (
    <button
      onClick={handleClick}
      className="flex justify-center gap-2 rounded-md border border-solid px-10 py-3 hover:bg-custom-7"
    >
      <Image src={social.icon} alt="Google logo" width={25} height={25} />
      <p className="font-medium">Sign in with {social.name}</p>
    </button>
  );
}
 */
