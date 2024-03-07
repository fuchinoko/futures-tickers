import React from "react";
import { Link } from "react-router-dom";

const QuotesPage = () => (
  <div style={{ margin: 50 }}>
    <h2>
      <Link to="/quotes">Котировки</Link>
    </h2>
  </div>
);

export default QuotesPage;
