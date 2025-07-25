<<<<<<< HEAD
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
=======
import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

<<<<<<< HEAD
export default Header;
>>>>>>> 07a5b35 (react-bite project)
=======
export default memo(Header);
>>>>>>> bf6e887 (useMemo, useCallback 활용 최적화)
