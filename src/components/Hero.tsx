import { Button } from "./ui/button";

const Hero = () => {
  const handleDownload = () => {
    // Example for a static file
    const fileUrl = "pdf/Achraf-EL-AFFAS-CV.pdf";
    const fileName = "resume.pdf";

    // Trigger download
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
    <div className="flex flex-col h-[84vh] justify-center items-center text-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <h1
        className="md:text-7xl text-5xl animate-slidein opacity-0 [--slidein-delay:300ms] z-10"
        style={styles}
      >
        Hi. I'am Achraf
      </h1>
      <h1 className="text-lg animate-slidein opacity-0 [--slidein-delay:350ms]">
        A software Engineer building solutions for the future.
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
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
    </div>
  );
};

export default Hero;
