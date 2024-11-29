import { Badge } from "@/components/ui/badge";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Step } from "./Work";
import StackIcon from "tech-stack-icons";

const Projects = () => {
  return (
    <div className="h-[84vh] flex items-center flex-col md:flex-row justify-center gap-3">
      <CardSpotlight className="w-full border md:w-1/3 bg-background animate-slidein opacity-0 [--slidein-delay:300ms]">
        <a href="https://submate.achrafelaffas.com" target="_blank">
          <p className="text-lg font-bold relative hover:underline z-20 mt-2 animate-slidein opacity-0 [--slidein-delay:350ms]">
            Submate - Manage your subscriptions
          </p>
        </a>
        <div className="mt-4 flex gap-3 relative z-20 animate-slidein opacity-0 [--slidein-delay:370ms]">
          <Badge variant="outline" className="flex gap-2 px-3 py-2">
            <StackIcon className="h-4 aspect-square" name="spring" />
            <span>Spring boot</span>
          </Badge>
          <Badge variant="outline" className="flex gap-2 px-3 py-2">
            <StackIcon className="h-4 aspect-square" name="reactjs" />
            <span>React</span>
          </Badge>
        </div>
        <ul className="list-none  mt-2">
          <Step title="Payment history generation." />
          <Step title="Dashboard for visualizing statistics." />
          <Step title="Reminders for upcoming payments." />
          <Step title="Trial period management." />
        </ul>
      </CardSpotlight>
    </div>
  );
};

export default Projects;
