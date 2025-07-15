# How to Add Your Profile Picture

## Quick Setup:

1. **Save your photo** as `profile.jpg` in the `public` folder
2. **Recommended specifications**:
   - File name: `profile.jpg` (exactly this name)
   - Size: 500x500 pixels or larger (square format works best)
   - Format: JPG, PNG, or WebP
   - File size: Under 2MB for fast loading

## Steps:

1. Navigate to the `public` folder in your project
2. Add your photo file and name it `profile.jpg`
3. The website will automatically use your image

## Current Setup:

- The website will first try to load `/profile.jpg`
- If that file doesn't exist, it will fall back to a stock photo
- This means you can test the website even without your photo

## File Location:
```
portfoliotaduran/
├── public/
│   ├── profile.jpg  ← Add your photo here
│   └── index.html
├── src/
└── ...
```

## Note:
Make sure your image file is named exactly `profile.jpg` (all lowercase) for the website to find it automatically.
