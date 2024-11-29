import { CardSpotlight } from "@/components/ui/card-spotlight";

const Education = () => {
  return (
    <div className="h-[84vh] flex items-center flex-col md:flex-row justify-center gap-3">
      <CardSpotlight className="w-full border md:w-1/3 bg-background animate-slidein opacity-0 [--slidein-delay:300ms]">
        <p className="text-xl font-bold relative z-20 mt-2 animate-slidein opacity-0 [--slidein-delay:350ms]">
          Engineer's Degree
          <p className="text-sm font-medium">
            Software Development and Information Technologies
          </p>
        </p>

        <div className="mt-1 text-blue-600 relative z-20 animate-slidein opacity-0 [--slidein-delay:370ms]">
          @IGA - 2025
        </div>
      </CardSpotlight>

      <CardSpotlight className="w-full border md:w-1/3 bg-background animate-slidein opacity-0 [--slidein-delay:300ms]">
        <p className="text-xl font-bold relative z-20 mt-2 animate-slidein opacity-0 [--slidein-delay:350ms]">
          BCompSc Degree
          <p className="text-sm font-medium p-0">
            Computer Systems Engineering and Web Technologies
          </p>
        </p>
        <div className="mt-1 text-blue-600 relative z-20 animate-slidein opacity-0 [--slidein-delay:370ms]">
          @UCD - 2023
        </div>
      </CardSpotlight>
    </div>
  );
};

export default Education;
