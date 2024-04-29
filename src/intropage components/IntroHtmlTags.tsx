const IntroHtmlTags = () => {
  return (
    <>
      <div className="mx-3">
        <ul className="list-group">
          <p className="h3 list-group-item text-primary">The html tags</p>
          <p className="h6 list-group-item">
            The html tag is the main tag of any html file and html structure. It
            provides a container for the html to be displayed in.{" "}
            <span className="text-muted">{"<html></html>"}</span>
          </p>
        </ul>

        <ul className="list-group">
          <p className="h3 list-group-item text-primary">Head and Body</p>
          <p className="h6 list-group-item">
            The head tag is the container of the title tag as well as other
            things such as where the styling of the website is located. It
            proves helpful in making distinction between actual content for the
            user and navigation between sites without looking at the content.
            <span className="text-muted">{"<head></head>"}</span>
          </p>
          <p className="h6 list-group-item">
            The body tag is one of the most if not the most important tag in
            html. It is a container for holding site content such as paragraphs,
            images and even links to different sites.
            <span className="text-muted">{"<body></body>"}</span>
          </p>
        </ul>
      </div>
    </>
  );
};

export default IntroHtmlTags;
