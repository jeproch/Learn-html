import Heading from "../homepage components/Heading";
import Introduction from "../homepage components/Introduction";
import Info from "../homepage components/Info";
import TextEditorSection from "../homepage components/Sections/TextEditorSection";
import IDESection from "../homepage components/Sections/IDESection";
import BottomBar from "../homepage components/BottomBar";

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
