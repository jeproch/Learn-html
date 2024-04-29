import { Link } from "react-router-dom";

const IDESection = () => {
  return (
    <>
      <div className="mx-3 text-start">
        <h3>
          Selecting an <span className="text-primary">IDE</span>
        </h3>
        <ul className="list-group">
          <li className="text-primary list-group-item">
            Popular IDEs include:
          </li>
          <li className="list-group-item">Visual Studio Code</li>
          <li className="list-group-item">IntelliJ IDEA</li>
          <li className="list-group-item">Xcode</li>
          <li className="list-group-item">PhpStorm</li>
        </ul>
        <p className="mt-3">
          An IDE comes with additional functionality that's why I recommend it
          over a plain text editor, but the choice is yours
        </p>
        <Link to="/IntroPage" className="btn btn-primary">
          Start the Course! Psst it's free.
        </Link>
      </div>
    </>
  );
};

export default IDESection;
