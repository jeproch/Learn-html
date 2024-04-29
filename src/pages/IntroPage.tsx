import IntroHeading from "../intropage components/IntroHeading";
import IntroTopBar from "../intropage components/IntroTopBar";
import IntroBody from "../intropage components/IntroBody";
import IntroHtmlTags from "../intropage components/IntroHtmlTags";
import ExampleStructure from "../intropage components/ExampleStructure";
import IntroConclusion from "../intropage components/IntroConclusion";

const IntroPage = () => {
  return (
    <>
      <IntroTopBar></IntroTopBar>
      <IntroHeading></IntroHeading>
      <IntroBody></IntroBody>
      <IntroHtmlTags></IntroHtmlTags>
      <ExampleStructure></ExampleStructure>
      <IntroConclusion></IntroConclusion>
    </>
  );
};

export default IntroPage;
