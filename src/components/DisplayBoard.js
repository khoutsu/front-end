import React from "react";

export const DisplayBoard = ({ numberOfMovies, getAllMovies }) => {
  return (
    <div style={{ backgroundColor: "green" }} className="display-board">
      <h4 style={{ color: "white" }}>Movies Created</h4>
      <div className="number">{numberOfMovies}</div>
      <div className="btn">
        <button
          type="button"
          onClick={(e) => getAllMovies()}
          className="btn btn-warning"
        >
          Get all Movies
        </button>
      </div>
    </div>
  );
};
