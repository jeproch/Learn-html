import IntroHeading from "../intropage components/IntroHeading";
import IntroTopBar from "../intropage components/IntroTopBar";
import IntroBody from "../intropage components/IntroBody";
import IntroHtmlTags from "../intropage components/IntroHtmlTags";

const IntroPage = () => {
  return (
    <>
      <IntroTopBar></IntroTopBar>
      <IntroHeading></IntroHeading>
      <IntroBody></IntroBody>
      <IntroHtmlTags></IntroHtmlTags>
    </>
  );
};

export default IntroPage;
