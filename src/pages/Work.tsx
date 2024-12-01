import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Meteors } from "@/components/ui/meteors";

const Work = () => {
  return (
    <div className="h-[84vh] max-h-[84vh] flex items-center flex-col md:flex-row justify-center gap-3">
      <CardSpotlight className="overflow-hidden border hover:shadow-lg w-full md:w-1/3 dark:bg-slate-900 bg-background animate-slidein opacity-0 [--slidein-delay:300ms] backdrop-blur-md">
        <p className="text-xl font-bold relative z-20 mt-2 animate-slidein opacity-0 [--slidein-delay:350ms]">
          Java Software Engineer
        </p>
        <div className="mt-4 relative z-20 animate-slidein opacity-0 [--slidein-delay:370ms]">
          @IchharWeb - 2024
          <ul className="list-none  mt-2">
            <Step title="Spring APIs development" />
            <Step title="UI with React and TypeScript" />
            <Step title="Enhancing integration with OpenAPI" />
          </ul>
        </div>
        <Meteors number={20} />
      </CardSpotlight>

      <CardSpotlight className="overflow-hidden border hover:shadow-lg w-full md:w-1/3 dark:bg-slate-900 bg-background animate-slidein opacity-0 [--slidein-delay:300ms]">
        <p className="text-xl font-bold relative z-20 mt-2 animate-slidein opacity-0 [--slidein-delay:350ms]">
          Analyst Developer
        </p>
        <div className="mt-4 relative z-20 animate-slidein opacity-0 [--slidein-delay:370ms]">
          @Finreg - 2023
          <ul className="list-none  mt-2">
            <Step title="Designing software architectures" />
            <Step title="Writing technical specifications" />
            <Step title="Conducting code reviews" />
          </ul>
        </div>
        <Meteors number={20} />
      </CardSpotlight>
    </div>
  );
};

export default Work;

export const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="animate-slidein opacity-0 [--slidein-delay:400ms]">
        {title}
      </p>
    </li>
  );
};

export const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
