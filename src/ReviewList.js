

import React, { useState } from "react";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUserPlus,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const ReviewList = ({ reviews }) => {
  const [tooltipContent, setTooltipContent] = useState(null);

  const highlightColor = (sentiment) => {
    switch (sentiment) {
      case "Positive":
        return "#D9F2DD";
      case "Negative":
        return "#F2DBD9";
      case "Mixed":
        return "#e8bd6d3d";
      case "Neutral":
        return "#eaf09b6b";
      default:
        return "inherit";
    }
  };

  const handleMouseEnter = (event, sentiment, topic) => {
    const { clientX, clientY } = event;
    setTooltipContent({ sentiment, topic, left: clientX, top: clientY });
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  const highlightSentences = (content, highlightIndices, topic) => {
    const parts = [];
    let lastIndex = 0;

    highlightIndices.forEach(([startIndex, endIndex, sentiment], index) => {
      const beforeHighlight = content.substring(lastIndex, startIndex);
      const highlighted = (
        <span
          key={index}
          style={{
            backgroundColor: highlightColor(sentiment),
            padding: "0.2rem",
            borderRadius: "3px",
            margin: "0.2rem",
            cursor: "pointer",
          }}
          onMouseEnter={(event) => handleMouseEnter(event, sentiment, topic)}
          onMouseLeave={handleMouseLeave}
        >
          {content.substring(startIndex, endIndex)}
        </span>
      );
      parts.push(beforeHighlight, highlighted);
      lastIndex = endIndex;
    });

    const remaining = content.substring(lastIndex);
    parts.push(remaining);
    return parts;
  };

  return (
    <div>
      {reviews.map((review) => (
        <div
          key={review.review_id}
          className="review"
          style={{ marginLeft: "2rem" }}
        >
          <br />
          <span style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
            />
            <span style={{ fontWeight: "bold" }}>{review.reviewer_name}</span>
            &nbsp;
            <span style={{ color: "lightgrey" }}> wrote a review at </span>
            &nbsp;
            <span style={{ fontWeight: "bold" }}>{review.source.name}</span>
            <span style={{ marginLeft: "auto", marginRight: "3rem" }}>
              <FontAwesomeIcon
                icon={faUserPlus}
                style={{
                  marginRight: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "normal",
                }}
              />
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ marginRight: "0.5rem", fontSize: "1rem" }}
              />
              <FontAwesomeIcon
                icon={faEllipsis}
                style={{ marginRight: "0.5rem", fontSize: "1rem" }}
              />
            </span>
          </span>

          <div style={{ marginLeft: "2rem" }}>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarRating rating={review.rating_review_score} />
              <h3
                style={{
                  marginRight: "1rem",
                  marginLeft: "10px",
                  fontSize: "0.8rem",
                  color: "grey",
                }}
              >
                {review.date}
              </h3>
            </div>
            {review.analytics.length > 0 && (
              <div style={{ marginRight: "3rem" }}>
                {review.analytics.map((analysis, index) => (
                  <div key={index}>
                    <p>
                      {highlightSentences(
                        review.content,
                        analysis.highlight_indices,
                        analysis.topic
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {tooltipContent && (
        <div
          style={{
            position: "fixed",
            top: tooltipContent.top,
            left: tooltipContent.left,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <p>Topic: {tooltipContent.topic}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewList;



