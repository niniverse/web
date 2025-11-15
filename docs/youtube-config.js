// YouTube Channel Configuration
// Add your YouTube videos here - no API key needed!

const youtubeVideos = [
    {
        id: "dQw4w9WgXcQ", // Replace with actual video ID
        title: {
            en: "Visual Strategy Masterclass",
            ka: "ვიზუალური სტრატეგიის მასტერკლასი"
        },
        description: {
            en: "Learn the fundamentals of visual storytelling",
            ka: "ისწავლეთ ვიზუალური მთხრობის საფუძვლები"
        }
    },
    {
        id: "dQw4w9WgXcQ", // Replace with actual video ID
        title: {
            en: "Brand Photography Series",
            ka: "ბრენდის ფოტოგრაფიის სერია"
        },
        description: {
            en: "Creating authentic visual narratives",
            ka: "ავთენტური ვიზუალური ნარატივების შექმნა"
        }
    },
    {
        id: "dQw4w9WgXcQ", // Replace with actual video ID
        title: {
            en: "Creative Journey Documentary",
            ka: "შემოქმედებითი მოგზაურობის დოკუმენტური"
        },
        description: {
            en: "Behind the scenes of building a creative career",
            ka: "კულისებს მიღმა შემოქმედებითი კარიერის აშენება"
        }
    }
];

// YouTube Channel URL (optional)
const youtubeChannelUrl = "https://www.youtube.com/@yourchannel"; // Replace with actual channel

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { youtubeVideos, youtubeChannelUrl };
}
