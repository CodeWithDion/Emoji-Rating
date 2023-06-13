// 1. Declare a variables
const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];


// 5. This for default after refresh page
updateRating(0);


// 2. add event listener "click" for each starEl
starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index)
    });
});


// 3. Create function for update rating
function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    });

    // 4. create this for the emoji and color transform
    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index];
    });
}

