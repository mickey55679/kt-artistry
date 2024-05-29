import React, { useState } from "react";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewsArray = [
    <iframe
      title="Facebook post by Allyson Acevedo"
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fallyson.acevedo.50%2Fposts%2Fpfbid02CADR9hymE4Bbk8Tuauuow1MuKLtRCnYaRC6ti5zZfVmLoCVKhy35bA9mweNXdDrWl&show_text=true&width=500&is_preview=true"
      width="500"
      height="169"
      style={{ border: "none", overflow: "hidden" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>,

    <iframe
      title="Facebook post by Trista Linder"
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrista.linder.3%2Fposts%2Fpfbid023KukQzWzF7mc9WpYPgfJs4Jh4nEYW7wZHmYAs9DuBs6XCLGvGQ1KxAjXrn8wnGfvl&show_text=true&width=500&is_preview=true"
      width="500"
      height="222"
      style={{ border: "none", overflow: "hidden" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>,

    <iframe
      title="Facebook post by Cindy Colwill"
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcindy.roth.1447%2Fposts%2Fpfbid033CozVqCaJkPNFv6MwkQ8B4p2HmdatVuHyAzC8f77nPs6ve9NJJZuQVwF9FmfCvsvl&show_text=true&width=500&is_preview=true"
      width="500"
      height="169"
      style={{ border: "none", overflow: "hidden" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      title="Facebook post by Alyssa Tiesler"
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falyssa.teunissen.5%2Fposts%2Fpfbid0Fmnq6KVdsugmzACs98AJS45cCfq1t7Z4qu2Wf1VNpSefknpT1XB4jLdbjCTtcsJ6l&show_text=true&width=500&is_preview=true"
      width="500"
      height="800"
      style={{ border: "none", overflow: "hidden" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      title="Facebook post by Cassidy Anne Teunissen"
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcassidy.anne.31%2Fposts%2Fpfbid0xKxXwNyZ6nfYzuHaiW5A1WcxJjc1cvQLMP1MLqahhQ2RubtwZfayAC9kTBWYDB8vl&show_text=true&width=500&is_preview=true"
      width="500"
      height="185"
      style={{ border: "none", overflow: "hidden" }}
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>,
  ];

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviewsArray.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (currentIndex - 1 + reviewsArray.length) % reviewsArray.length
    );
  };

  return (
    <div>
      <div className="reviews">{reviewsArray[currentIndex]}</div>
      <button onClick={prevReview}>Previous</button>
      <button onClick={nextReview}>Next</button>
    </div>
  );
}

export default Reviews;
