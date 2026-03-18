# SPGtechsoft Website

React (Vite) + Node.js/Express website built from Figma designs.

## 🚀 Start Dev Server

```bat
REM Open Command Prompt and run:
set PATH=C:\Users\loq\Downloads\node-v24.14.0-win-x64\node;%PATH%
cd C:\Users\loq\Desktop\websift\client
npm run dev
```

Then open → **http://localhost:5173**

## 🖼️ Adding Your Images

Drop images into: `client/public/images/`

| Filename | Section |
|---|---|
| `hero-team.jpg` | Hero — team photo (right side) |
| `why-lightbulb.jpg` | Why Us — top-left photo |
| `why-help.jpg` | Why Us — top-right photo |
| `why-meeting.jpg` | Why Us — bottom-left photo |
| `why-handshake.jpg` | Why Us — bottom-right photo |
| `logo.png` *(optional)* | Nav logo |

After adding images, set `hasImage = true` in `client/src/components/Hero.jsx` line 4.

## 🛠️ Start Express Backend

```bat
set PATH=C:\Users\loq\Downloads\node-v24.14.0-win-x64\node;%PATH%
cd C:\Users\loq\Desktop\websift\server
node index.js
```

Backend runs on → **http://localhost:5000**

## 📦 Production Build

```bat
set PATH=...
cd client
npm run build
```

Set `NODE_ENV=production` on the server to serve the built React app.
