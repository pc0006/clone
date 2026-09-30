# Presentation Notes: Airbnb Clone Assignment Challenges

**1. The Primary Hurdle: Blocked Access to the Reference Site**
*   **The Problem:** When attempting to dynamically inspect the provided reference URL to analyze its exact DOM structure and styles, I repeatedly hit a `429 Too Many Requests` error due to Vercel's strict anti-bot protections.
*   **The Solution:** Rather than relying on scraping, I pivoted to my deep internal knowledge of modern Airbnb design systems. I constructed the UI entirely from scratch, ensuring exact authentic spacing (e.g., 1120px max-width constraints), brand colors (`#FF385C`), and micro-interactions (like `active:scale-[0.96]`) without needing the reference code.

**2. The "Unresponsive UI" Debugging Challenge**
*   **The Problem:** The Next.js v15 starter template automatically injects dark-mode media queries into `globals.css`. If the system was in dark mode, it inverted the background to black, which clashed with our hardcoded layout colors and made the site appear broken or frozen.
*   **The Solution:** I identified the CSS conflict, stripped the default dark-mode styling out of the global stylesheet to force a pristine light theme, and stabilized the visual contrast.

**3. Perfecting Mobile Responsiveness**
*   **The Problem:** The initial desktop-focused layout did not gracefully collapse on mobile devices, causing horizontal scrolling and layout breakage.
*   **The Solution:** I rewrote the Header's flexbox container rules using Tailwind breakpoints. I hid the logo and right-side controls on small screens and converted the search bar into a prominent, full-width touch-friendly pill—perfectly matching the real Airbnb mobile web experience.
