import { Badge } from "@/components/ui/badge";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Step } from "./Work";
import StackIcon from "tech-stack-icons";
import { SquareArrowOutUpRight } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

const Projects = () => {
  return (
    <div className="h-[84vh] max-h-[84vh] flex items-center flex-col md:flex-row justify-center gap-3">
      <CardSpotlight className="overflow-hidden border hover:shadow-lg w-full md:w-1/3 bg-background dark:bg-slate-900 animate-slidein opacity-0 [--slidein-delay:300ms]">
        <p className="text-lg font-bold relative z-20 mt-2 animate-slidein opacity-0 [--slidein-delay:350ms]">
          Submate - Manage your subscriptions
        </p>
        <a
          href="https://submate.achrafelaffas.com"
          className="animate-slidein opacity-0 [--slidein-delay:360ms]"
          target="_blank"
        >
          <p className="z-50 relative underline text-base flex items-center gap-1">
            <span>submate</span> <SquareArrowOutUpRight className="h-3 w-3" />
          </p>
        </a>
        <ul className="list-none  mt-2 relative z-20">
          <Step title="Payment history generation." />
          <Step title="Dashboard for visualizing statistics." />
          <Step title="Reminders for upcoming payments." />
          <Step title="Trial period management." />
        </ul>
        <div className="mt-4 flex gap-3 relative z-20 animate-slidein opacity-0 [--slidein-delay:370ms]">
          <Badge variant="outline" className="border-0 flex gap-2 px-3 py-2">
            <StackIcon className="h-4 aspect-square" name="spring" />
            <span>Spring boot</span>
          </Badge>
          <Badge variant="outline" className="border-0 flex gap-2 px-3 py-2">
            <StackIcon className="h-4 aspect-square" name="reactjs" />
            <span>React</span>
          </Badge>
        </div>
        <Meteors number={20} />
      </CardSpotlight>

      <CardSpotlight className="overflow-hidden border hover:shadow-lg w-full md:w-1/3 bg-background dark:bg-slate-900 animate-slidein opacity-0 [--slidein-delay:300ms]">
        <p className="text-lg font-bold relative z-20 mt-2 animate-slidein opacity-0 [--slidein-delay:350ms]">
          Tlnthunt - Freelancing website
        </p>
        <a
          href="https://tlnthunt.achrafelaffas.com"
          className="animate-slidein opacity-0 [--slidein-delay:360ms]"
          target="_blank"
        >
          <p className="z-50 relative underline text-base flex items-center gap-1">
            <span>tlnthunt</span> <SquareArrowOutUpRight className="h-3 w-3" />
          </p>
        </a>
        <ul className="list-none  mt-2 relative z-20">
          <Step title="Project and proposal management." />
          <Step title="Implementation of internal communication." />
          <Step title="Creation of personalized profiles." />
          <Step title="Invoice management and email notifications." />
        </ul>
        <div className="mt-4 flex gap-3 relative z-20 animate-slidein opacity-0 [--slidein-delay:370ms]">
          <Badge variant="outline" className="border-0 flex gap-2 px-3 py-2">
            <StackIcon className="h-4 aspect-square" name="spring" />
            <span>Spring boot</span>
          </Badge>
          <Badge variant="outline" className="border-0 flex gap-2 px-3 py-2">
            <StackIcon className="h-4 aspect-square" name="reactjs" />
            <span>React</span>
          </Badge>
        </div>
        <Meteors number={20} />
      </CardSpotlight>
    </div>
  );
};

export default Projects;
