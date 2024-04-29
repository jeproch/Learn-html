const TextEditorSection = () => {
  return (
    <>
      <div className="text-start mx-3">
        <p>
          First we'll look at setting up a{" "}
          <span className="text-primary">Text Editor</span>
        </p>
        <h3>
          Selecting a <span className="text-primary">Text Editor</span>
        </h3>
        <ul className="list-group">
          <li className="text-primary list-group-item">
            Popular text editors include:
          </li>
          <li className="list-group-item">Sublime text</li>
          <li className="list-group-item">Atom</li>
          <li className="list-group-item">Notepad++</li>
          <li className="list-group-item">Vim</li>
        </ul>
        <p className="mt-3">
          For this part of the course, I'll assume you have this set up or at
          least know what a text editor is, otherwise you can go to{" "}
          <a href="https://www.w3schools.com/html/html_editors.asp">this</a>{" "}
          link to find out more .
        </p>
      </div>
    </>
  );
};

export default TextEditorSection;
