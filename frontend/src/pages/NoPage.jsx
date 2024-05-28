import "./NoPage.css";

const NoPage = () => {
  return (
    <>
      <div className="broken">
        <div className="broken__filter">
          <div className="error__container">
            <div className="error__msg--title">404 - Page Not Found</div>
            <div className="error__msg--detail">
              <ul>
                <p>ESOD(Ethan Screen Of Death) might be caused by:</p>
                <li>
                  You <u>misspelled</u> the web url.
                </li>
                <li>
                  You <u>refreshed</u> the page & caused a .httaccess error (im
                  figuring it out how to fix this)
                </li>
                <p>Solution: Go re-enter the previous page using navbar</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
