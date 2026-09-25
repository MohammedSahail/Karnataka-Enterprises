KARNATAKA AGRO TRAILERS - REDESIGNED WEBSITE
================================================

1. Put the folders/files like this:
   project/
     index.html
     style.css
     script.js
     server.js
     images/
       shed.jpg
       machine 1.jpg
       machine 2.jpg
       machine 4.jpg
       machine3.jpg
       trailer 1.jpg
       trailer 2.jpg
       wageed.jpg
       khaleed.jpg

2. IMPORTANT:
   The website uses the image names already present in your old website.
   Keep your existing images/ folder beside index.html.

3. Fastest way:
   Open index.html directly in Chrome.

4. With Node/Express:
   Open terminal in the project folder:
     npm init -y
     npm install express cors
     node server.js
   Then open:
     http://localhost:5000

5. WhatsApp:
   The enquiry buttons currently send to +91 89511 43123.
   To change the owner number, edit ownerWhatsApp in script.js.
   WhatsApp links use the wa.me format and automatically prepare a product-specific message.

6. Sign in / Create account:
   This version is a front-end demo. It stores the demo account in localStorage.
   It is NOT secure production authentication.
   For real login with passwords, use a real backend/auth provider.

7. 3D:
   The hero machine uses CSS 3D perspective and mouse tilt. It automatically falls back on touch/mobile.

8. Replace the old files with these redesigned files. Do not mix the old malformed HTML into the new index.html.


V2 IMAGE SETUP
==============
The HTML expects your real images inside an `images` folder next to index.html.

Required filenames:
- shed.jpg
- machine 1.jpg
- machine 2.jpg
- machine 4.jpg
- machine3.jpg
- trailer 1.jpg
- trailer 2.jpg
- wageed.jpg
- khaleed.jpg

If your image filenames are different, either rename them to the names above
OR edit the `src="images/..."` paths in index.html.

Recommended image sizes:
- Machine photos: 1200 x 900 or larger
- Project photos: 1600 x 1000 or larger
- Owner photos: square, 800 x 800 or larger
- Workshop photo: 1600 x 1200 or larger

V2 THEME
========
The moon/sun button now switches the complete website between light and dark
themes and remembers the selected theme in localStorage.

If you deploy a fresh copy, clear the browser's old localStorage once if an
older version was previously tested.

V2 DESIGN
=========
The page now has stronger visual hierarchy, more separation between sections,
consistent image cropping, a premium industrial look, responsive layouts,
3D hero interaction, product quick-view modals, WhatsApp enquiry flow,
owner contact cards and persistent theme preference.
