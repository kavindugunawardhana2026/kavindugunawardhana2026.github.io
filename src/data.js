// ============================================================
//  data.js — Your single source of truth for portfolio content
//  ============================================================
//  HOW TO ADD A NEW PROJECT:
//    1. Copy one of the objects below.
//    2. Give it a unique `id` (just increment the number).
//    3. Fill in title, description, tags, liveUrl, sourceUrl.
//    4. Upload your image to Cloudinary (or put it in src/assets/images/)
//       and paste the URL into `imageUrl`.
//    5. Save — the UI updates automatically.
// ============================================================

// ------------------------------------------------------------------
//  ENGINEERING / DEVELOPMENT PROJECTS  (used by Projects.jsx)
// ------------------------------------------------------------------
export const projects = [
  {
    id: 1,
    title: "Multi Vision Education Platform",
    description:
      "A premium EdTech tuition platform. Designed and developed the full modern UI/UX, including student dashboards, AI advisors, and interactive learning tools.",
    tags: ["Web Development", "UI/UX Design", "Frontend Development", "AI"],
    // Replace with your Cloudinary URL or a local path like /src/assets/images/your-image.png
    imageUrl: "https://res.cloudinary.com/zajpzhrd/image/upload/f_auto,q_auto/Screenshot_2026-07-01_165213_hxkquh",
    liveUrl: "#",   // ← paste your live demo link here
    sourceUrl: "#", // ← paste your GitHub repo link here
    accentColor: "neon-cyan",
  },
  // ── Add more engineering projects below ───────────────────────────
  // {
  //   id: 2,
  //   title: "My Next Project",
  //   description: "Short description of what it does.",
  //   tags: ["React", "Node.js"],
  //   imageUrl: "https://res.cloudinary.com/your-cloud/image/upload/v123/my-project.jpg",
  //   liveUrl: "https://my-project.vercel.app",
  //   sourceUrl: "https://github.com/you/my-project",
  //   accentColor: "neon-purple",
  // },
];

// ------------------------------------------------------------------
//  CREATIVE / DESIGN WORKS  (used by DesignGallery.jsx)
// ------------------------------------------------------------------
export const creativeWorks = [
  {
    id: 1,
    title: "Future world in 2050",
    type: "Adobe Photoshop",
    description:
      "Design of MasterDesigner 3.0 Competition",
    // Replace with your Cloudinary URL once you upload the image
    imageUrl: "https://res.cloudinary.com/zajpzhrd/image/upload/f_auto,q_auto/1_f7vxjd", // e.g. "https://res.cloudinary.com/your-cloud/image/upload/v123/cybernetic-arm.jpg"
    color: "neon-cyan",
  },
  {
    id: 2,
    title: "FB post",
    type: "Adobe Photoshop",
    description:
      "Nuwan manawadu sir tution class flyer",
    imageUrl: "https://res.cloudinary.com/zajpzhrd/image/upload/f_auto,q_auto/NM_2028_AL_post_copy_gfkdtx",
    color: "neon-purple",
  },
  {
    id: 3,
    title: "Alpha Dynamics logo",
    type: "Vector Design",
    description:
      "My first company as graphic designer",
    imageUrl: "https://res.cloudinary.com/zajpzhrd/image/upload/v1782905990/My_logo_wtq7my.png",
    color: "neon-green",
  },
  {
    id: 4,
    title: "First year hardware project 3D model",
    type: "Blender",
    description: "Smart chess board design.",
    imageUrl: "https://res.cloudinary.com/zajpzhrd/image/upload/v1782905291/chess1_etpyrg.png",
    color: "neon-pink",
  },
  // ── Add more creative works below ─────────────────────────────────
  // {
  //   id: 5,
  //   title: "My Design",
  //   type: "Motion Graphics",
  //   description: "…",
  //   imageUrl: "https://…",
  //   color: "neon-cyan",
  // },
];
