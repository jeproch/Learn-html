import Heading from "../components/Heading";
import Introduction from "../components/Introduction";
import Info from "../components/Info";
import TextEditorSection from "../components/Sections/TextEditorSection";
import IDESection from "../components/Sections/IDESection";
import BottomBar from "../components/BottomBar";

const HomePage = () => {
  return (
    <div>
      <Heading />
      <Introduction />
      <Info />
      <TextEditorSection />
      <IDESection />
      <BottomBar />
    </div>
  );
};

export default HomePage;
