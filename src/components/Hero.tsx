import { Button } from "./ui/button";
import { HeroHighlight } from "./ui/hero-highlight";

const Hero = () => {
  const handleDownload = () => {
    const fileUrl = "pdf/Achraf-EL-AFFAS-CV.pdf";
    const fileName = "resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const styles = {
    fontFamily: "Signategrotesk, sans-serif",
  };

  return (
    <HeroHighlight className="max-h-[84vh] h-[84vh] flex flex-col justify-center items-center text-center">
      <h1
        className="md:text-7xl text-4xl animate-slidein opacity-0 [--slidein-delay:300ms] z-10"
        style={styles}
      >
        Hi. I'am Achraf
      </h1>
      <h1 className="md:text-lg px-6 md:px-0 animate-slidein opacity-0 [--slidein-delay:350ms]">
        A software Engineer building solutions for the future.
      </h1>

      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/achrafelaffas/" target="_blank">
          <Button className="w-auto mt-3 animate-slidein opacity-0 [--slidein-delay:450ms] bg-blue-600 hover:bg-blue-800 text-white">
            LinkedIn
          </Button>
        </a>

        <Button
          onClick={handleDownload}
          variant="outline"
          className="w-auto mt-3 animate-slidein opacity-0 [--slidein-delay:450ms]"
        >
          Resume
        </Button>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
