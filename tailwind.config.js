/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "colecci-n-de-variables-gris": "var(--colecci-n-de-variables-gris)",
        "colecci-n-de-variables-gris2": "var(--colecci-n-de-variables-gris2)",
        "colecci-n-de-variables-gris3": "var(--colecci-n-de-variables-gris3)",
        "colecci-n-de-variables-gris4": "var(--colecci-n-de-variables-gris4)",
        "colecci-n-de-variables-marr-n1":
          "var(--colecci-n-de-variables-marr-n1)",
        "colecci-n-de-variables-verde1": "var(--colecci-n-de-variables-verde1)",
        "dark-green": "var(--dark-green)",
        "dark-moss": "var(--dark-moss)",
        "moss-green": "var(--moss-green)",
      },
      boxShadow: {
        "button-shadow": "var(--button-shadow)",
      },
    },
  },
  plugins: [],
};
