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
                <p>Ur page is lost... might be caused by:</p>
                <li>
                  You <u>misspelled</u> the web url.
                </li>
                <li>
                  You <u>refreshed</u> the page & caused a .httaccess error (due
                  to github hosting)
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
