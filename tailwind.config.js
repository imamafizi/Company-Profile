// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#f7e6cc",
//         secondary: "#2c5364",
//         tred: "#9e0700",
//         empat: "#0b183b",
//         backgroundImage: {
//           "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//           "gradient-conic":
//             "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

import flowbite from "flowbite/plugin";

const config = {
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  plugins: [flowbite],
  theme: {
    extend: {
      colors: {
        primary: "#f7e6cc",
        secondary: "#2c5364",
        tred: "#9e0700",
        empat: "#0b183b",
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
};

export default config;
