document.querySelectorAll(".like-btn").forEach((btn) => {
  btn.onclick = async (e) => {
    e.preventDefault();

    const id = btn.dataset.id;
    const countSpan = btn.nextElementSibling; // <span>{{tweetLikes.length}}</span>
    const current = Number(countSpan.textContent) || 0;
    const isLiked = btn.classList.contains("liked");

    try {
      const res = await fetch(`/home/like/${id}`, { method: "POST" });

      if (isLiked) {
        // UNLIKE
        btn.classList.remove("liked");
        countSpan.textContent = current - 1;
      } else {
        // LIKE
        btn.classList.add("liked");
        countSpan.textContent = current + 1;
      }
    } catch (err) {
      console.error("LIKE ERROR", err);
    }
  };
});