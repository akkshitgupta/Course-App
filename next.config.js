/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname:
          "/images?q=tbn:ANd9GcR-qf41Ps5fsmHsQ2B9Bzuiid89EV23sZXm7nUp3Q2sgMFxjCsTAUv5iPPJ65_JzBb-ges&usqp=CAU",
      },
    ],
  },
};

module.exports = nextConfig;
