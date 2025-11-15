# YouTube Videos Setup

## How to Add Your YouTube Videos

### Step 1: Edit youtube-config.js

Open `docs/youtube-config.js` and update the `youtubeVideos` array:

```javascript
const youtubeVideos = [
    {
        id: "YOUR_VIDEO_ID_HERE", // Get this from the YouTube URL
        title: {
            en: "Your Video Title in English",
            ka: "თქვენი ვიდეოს სათაური ქართულად"
        },
        description: {
            en: "Video description in English",
            ka: "ვიდეოს აღწერა ქართულად"
        }
    },
    // Add more videos...
];
```

### Step 2: Find Your YouTube Video IDs

From a YouTube URL like:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

The video ID is: `dQw4w9WgXcQ`

### Step 3: Set Your Channel URL

Update the channel link:

```javascript
const youtubeChannelUrl = "https://www.youtube.com/@yourchannel";
```

### Step 4: Save and Deploy

```bash
git add docs/youtube-config.js
git commit -m "Add YouTube videos"
git push
```

## Example Configuration

```javascript
const youtubeVideos = [
    {
        id: "abc123xyz",
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
        id: "def456uvw",
        title: {
            en: "Brand Photography Series",
            ka: "ბრენდის ფოტოგრაფიის სერია"
        },
        description: {
            en: "Creating authentic visual narratives",
            ka: "ავთენტური ვიზუალური ნარატივების შექმნა"
        }
    }
];

const youtubeChannelUrl = "https://www.youtube.com/@niniverse";
```

## Features

- ✅ Responsive YouTube embeds
- ✅ Bilingual titles and descriptions
- ✅ Auto-updates when language changes
- ✅ Beautiful card design
- ✅ Link to full channel
- ✅ No API key needed!

## No Build Step

Just edit the config file and push. The videos will update instantly!

## Testing Locally

```bash
npm run dev
# Visit http://localhost:8000
```

Navigate to the Videos section to see your videos.

---

**That's it!** Simple configuration, no complexity.
