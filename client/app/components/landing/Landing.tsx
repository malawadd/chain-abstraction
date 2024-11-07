import Flow from "~/flow.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Landing() {
  return (
    <div className="flex flex-col items-center text-gray-900 mt-10 md:mt-20 lg:mt-40">
     
      <p className="text-gray-600 font-semibold">Get started:</p>
      <ConnectButton />
      
    </div>
  );
}

type HowItWorksItemProps = {
  number: number;
  title: string;
  description: string;
};

function HowItWorksItem({ number, title, description }: HowItWorksItemProps) {
  return (
    <div className="max-w-[280px] w-full">
      <div className="flex justify-center items-center font-semibold">
        <span className="text-7xl text-gray-300 font-extrabold mr-4">
          {number}.
        </span>
        <h3 className="text-3xl font-extrabold text-center text-gray-900">
          {title}{" "}
        </h3>
      </div>
      <p className="mt-4 text-center text-gray-900">{description}</p>
    </div>
  );
}
