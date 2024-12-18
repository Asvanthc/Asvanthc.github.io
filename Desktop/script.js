class VideoPlayer {
    constructor(videoUrls) {
        this.videoUrls = videoUrls;         // Array of video URLs
        this.currentIndex = 0;              // Current video index
        this.isVideo1Playing = true;        // Flag to track which video tag is active
    }

    // Dynamically create video elements
    createVideoElement() {
        const videoElement = document.createElement("video");
        videoElement.className = "player";
        videoElement.muted = true;
        videoElement.style.opacity = 0; // Start with hidden video
        document.body.appendChild(videoElement);
        return videoElement;
    }

    // Remove video element from DOM
    removeVideoElement(videoElement) {
        videoElement.removeAttribute("src"); // Remove the src attribute
        videoElement.load(); // Clear the video
        document.body.removeChild(videoElement); // Remove from DOM
    }

    // Prepare the video element
    prepareVideo(videoElement, videoUrl) {
        return new Promise((resolve, reject) => {
            videoElement.onerror = () => {
                reject(new Error("Error loading video"));
            };

            videoElement.onloadeddata = () => resolve(); // When video is loaded and ready to play

            // Set the video source
            videoElement.src = videoUrl;
            videoElement.load();
        });
    }

    // Center the video element to fill the screen
    centerVideo(videoElement) {
        // Ensure video stretches to cover the full screen
        videoElement.style.position = "absolute";
        videoElement.style.top = "0";
        videoElement.style.left = "0";
        videoElement.style.width = "100%";
        videoElement.style.height = "100%";
        videoElement.style.objectFit = "cover"; // Ensures the video covers the full screen while maintaining aspect ratio
    }

    // Play the video
    playVideo(videoElement) {
        videoElement.style.opacity = 1; // Make the video visible
        videoElement.style.transform = "translateX(0)"; // Slide the video into view
        videoElement.play().catch((error) => {
            console.error("Error playing video:", error);
        });
    }

    // Stop the video and clear resources
    stopVideo(videoElement) {
        videoElement.style.transform = "translateX(-100%)"; // Slide the video off-screen to the left
        setTimeout(() => {
            videoElement.pause();
            videoElement.removeAttribute("src");
            videoElement.load();
            videoElement.style.opacity = 0; // Hide the video
        }, 1000); // Ensure the slide effect completes before stopping
    }

    // Handle video ending and load the next one
    handleVideoEnd() {
        const currentVideo = this.isVideo1Playing ? this.videoElement1 : this.videoElement2;
        const nextVideo = this.isVideo1Playing ? this.videoElement2 : this.videoElement1;

        this.stopVideo(currentVideo);
        this.currentIndex = (this.currentIndex + 1) % this.videoUrls.length;

        // Ensure the next video is prepared properly before playing
        this.prepareVideo(nextVideo, this.videoUrls[this.currentIndex])
            .then(() => this.centerVideo(nextVideo))
            .then(() => {
                nextVideo.style.transform = "translateX(100%)"; // Start off-screen to the right
                this.playVideo(nextVideo);
            });

        this.isVideo1Playing = !this.isVideo1Playing; // Toggle active video
    }

    // Initialize the player
    initialize() {
        // Create the initial video elements
        this.videoElement1 = this.createVideoElement();
        this.videoElement2 = this.createVideoElement();

        this.videoElement1.addEventListener("ended", () => this.handleVideoEnd());
        this.videoElement2.addEventListener("ended", () => this.handleVideoEnd());

        // Initialize the first video element
        this.prepareVideo(this.videoElement1, this.videoUrls[this.currentIndex])
            .then(() => this.centerVideo(this.videoElement1))
            .then(() => this.playVideo(this.videoElement1))
            .catch((error) => {
                console.error("Error initializing video player:", error);
            });
    }
}

// Example usage
const videoUrls = ["video1.mp4", "video2.mp4", "video1.mp4"];
const player = new VideoPlayer(videoUrls);
player.initialize();
