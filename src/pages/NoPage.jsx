import "./NoPage.css";

const NoPage = () => {
  const quoteRand = [
    "Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Ghandi",
    "The only true wisdom is in knowing you know nothing. -Socrates",
    "The unexamined life is not worth living. -Socrates",
    "Children nowadays are tyrants. They contradict their parents, gobble their food, and tyrannise their teachers -Socrates",
    "My advice to you is get married: if you find a good wife you'll be happy; if not, you'll become a philosopher. -Socrates",
  ];
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
                <p>Here's a quote:</p>
                <p>{quoteRand[Math.floor(Math.random() * quoteRand.length)]}</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
