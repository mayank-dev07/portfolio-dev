import Link from "next/link";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="text-[#15b269] text-2xl">&lt;</span>
          <p className="text-sm">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abu-said-bd/"
              className="text-[#16f2b3]"
            >
              Mayank dev
            </Link>
          </p>
          <span className="text-[#15b269] text-2xl">/&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
