const thumbnailImages = document.getElementsByClassName("my-image")
const largeImage = document.getElementById("large-image")
const largeImageContainer = document.getElementById("large-image-container")
const overlay = document.getElementById("overlay")
const closeButton = document.getElementById("close-button")
const leftButton = document.getElementById("left-button")
const rightButton = document.getElementById("right-button")

const imageNames = ["art-9.jpg", "art-2.jpg", "art-3.jpg", "art-4.jpg", "art-5.jpg", "art-6.jpg", "art-7.jpg", "art-8.jpg"]

let displayImageIndex = 0

function adjustArrowColors() {
    if (displayImageIndex == 0) {
        leftButton.style.color = "rgba(255, 255, 255, 0.3)"
    } else {
        leftButton.style.color = "white"
    }

    if (displayImageIndex == imageNames.length-1) {
        rightButton.style.color = "rgba(255, 255, 255, 0.3)"
    } else {
        rightButton.style.color = "white"
    }
}

// Handle open image
Array.from(thumbnailImages).forEach( (thumbnail, index) => {
    thumbnail.addEventListener('click', (event) => {
        event.preventDefault()
        if(screen.width <= 425) {
            return
        }
        // Display large image and set its content
        const imageSrc = thumbnail.getAttribute("src")
        largeImage.setAttribute("src", imageSrc)
        largeImageContainer.style.display = "block"
        largeImageContainer.style.zIndex = "1000"

        // Blur the background
        overlay.style.display = "block"

        // Log the index
        displayImageIndex = index

        adjustArrowColors()
    })
});

// Handle close image
closeButton.addEventListener("click", (event) => {
    event.preventDefault()
    // Close the large image
    largeImageContainer.style.display = "none"
    largeImageContainer.style.zIndex = "-100"

    // Reset the background
    overlay.style.display = "none"
})

leftButton.addEventListener("click", (event) => {
    event.preventDefault()
    if(displayImageIndex == 0) {
        return
    }
    displayImageIndex -= 1
    largeImage.setAttribute("src", "images/" + imageNames[displayImageIndex])

    adjustArrowColors()
})

rightButton.addEventListener("click", (event) => {
    event.preventDefault()
    if(displayImageIndex == imageNames.length-1) {
        return
    }
    displayImageIndex += 1
    largeImage.setAttribute("src", "images/" + imageNames[displayImageIndex])

    adjustArrowColors()
})