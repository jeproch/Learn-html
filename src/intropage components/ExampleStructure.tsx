const ExampleStructure = () => {
  return (
    <div className="container mx-1">
      <div className="card mb-3">
        <div className="card-body">
          <h3 className=" text-primary">
            Try to see how the HTML structure works with the below example:
          </h3>
          <pre className="card-text">
            {`
              <html>
                <head>
                  <title>Page Title</title>
                </head>
                <body>
                  <h1>This is a Heading</h1>
                  <p>This is a paragraph.</p>
                </body>
              </html>
            `}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ExampleStructure;
