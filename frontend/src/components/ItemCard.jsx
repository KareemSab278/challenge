import React from "react";

export { ItemCard };

const ItemCard = ({ data }) => {
  const theme = localStorage.getItem("theme") || "light";
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px 0",
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#e0e0e0ff" : "#333",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "200px",
    height: "auto",
    borderRadius: "4px",
    marginBottom: "12px",
  };

  const fieldStyle = {
    marginBottom: "8px",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginRight: "8px",
  };

  return (
    <div style={cardStyle}>
      {data?.cover_image && ( // the ? is called chainiing operator
        <img src={data?.cover_image} alt={data?.title} style={imageStyle} />
      )}
      <div style={fieldStyle}>
        <span style={labelStyle}>ID:</span> {data?.id}
      </div>
      <div style={fieldStyle}>
        <span style={labelStyle}>Title:</span> {data?.title}
      </div>
      <div style={fieldStyle}>
        <span style={labelStyle}>Description:</span> {data?.description}
      </div>
      <div style={fieldStyle}>
        <span style={labelStyle}>Release Year:</span> {data?.release_year}
      </div>
      <div style={fieldStyle}>
        <span style={labelStyle}>Episodes:</span> {data?.episodes}
      </div>
      <div style={fieldStyle}>
        <span style={labelStyle}>Created At:</span>{" "}
        {new Date(data?.created_at).toLocaleString()}
      </div>
    </div>
  );
};
