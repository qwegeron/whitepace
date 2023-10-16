import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <button onClick={handleGoBack}>Go Back</button>;
};
