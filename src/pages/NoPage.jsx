import "./NoPage.css";

const NoPage = () => {
  return (
    <>
      <div className="broken">
        <div className="broken__filter">
          <div className="error__container">
            <div className="error__christmas">&nbsp;</div>
            <div className="error__msg--title">404 - Page Not Found</div>
            <div className="error__msg--detail">
              <ul>
                <p>Congratulations, You are lost!</p>
                <li>
                  Misspelled the <u>web URL</u>!
                </li>
                <p>Here's a quote of motivation:</p>
                <p>
                  "Reflect on oneself, so that truth is aquired. It may be
                  deeply unsettling, scary, and painful. Nonetheless,{" "}
                  <u>Only truth will foster personal growth</u>"
                  {/* 2AM PHILOSOPHICAL ENLIGHTENMENT GOES HARD */}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
