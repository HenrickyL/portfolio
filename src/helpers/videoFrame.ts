const BRIGHT = 70;

export const holdVideoFrame = (video: HTMLVideoElement) => {
    video.muted = true;
    video.volume = 0;
    if (video.dataset.framed === "1" || !Number.isFinite(video.duration) || video.duration <= 0) {
        return;
    }
    video.dataset.framed = "1";
    const stops = [0.08, 0.18, 0.35].map((part) =>
        Math.min(video.duration * part, Math.max(video.duration - 0.05, 0)),
    );
    const canvas = document.createElement("canvas");
    canvas.width = 8;
    canvas.height = 8;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
        video.currentTime = stops[0];
        return;
    }
    const paint = (index: number) => {
        const target = stops[index];
        const done = () => {
            context.drawImage(video, 0, 0, 8, 8);
            const data = context.getImageData(0, 0, 8, 8).data;
            let sum = 0;
            for (let i = 0; i < data.length; i += 4) {
                sum += data[i] + data[i + 1] + data[i + 2];
            }
            if (sum / (data.length / 4) > BRIGHT || index >= stops.length - 1) {
                return;
            }
            paint(index + 1);
        };
        if (Math.abs(video.currentTime - target) < 0.05 && video.readyState >= 2) {
            done();
            return;
        }
        video.addEventListener("seeked", done, { once: true });
        video.currentTime = target;
    };
    paint(0);
};

export const bindVideoFrame = (node: HTMLVideoElement | null) => {
    if (!node) {
        return;
    }
    if (node.readyState >= 1) {
        holdVideoFrame(node);
        return;
    }
    node.addEventListener("loadedmetadata", () => holdVideoFrame(node), { once: true });
};
