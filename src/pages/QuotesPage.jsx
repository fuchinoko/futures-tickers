import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Spin, Alert } from "antd";
import storeInstance from "../store";
import QuotesTable from "../components/QuotesTable";
import QuoteModal from "../components/QuoteModal";

function QuotesPage() {
  useEffect(() => {
    storeInstance.setPageActive();
    return () => storeInstance.setPageInactive();
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState({});

  const handleClose = () => {
    setOpen(false);
    storeInstance.setPageActive();
    setSelectedQuote({});
  };

  const handleOpen = (quote) => {
    setOpen(true);
    storeInstance.setPageInactive();
    setSelectedQuote(quote);
  };

  const { quotes, loading, error } = storeInstance;

  const renderContent = () => {
    if (error) {
      return (
        <Alert message="Error" description={error} type="error" showIcon />
      );
    }
    if (loading && !quotes.length) {
      return <Spin />;
    }
    return (
      <>
        <QuotesTable quotes={[...quotes]} handleOpen={handleOpen} />
        <QuoteModal
          open={open}
          handleClose={handleClose}
          selectedQuote={selectedQuote}
        />
      </>
    );
  };
  return (
    <div style={{ margin: 50 }}>
      <h2>
        <Link to="/">О приложении</Link>
      </h2>
      {renderContent()}
    </div>
  );
}

export default observer(QuotesPage);
