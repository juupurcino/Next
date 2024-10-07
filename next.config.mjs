/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",

            },{
                source: "/matematicas",
                destination: "/maths"
            },{
                source: "/pagina-fetch-page",
                destination: "/fetch-page",

            },{
                source: "/pagina-axios-page",
                destination: "/axios-page",

            },{
                source: "/pagina-server-side",
                destination: "/server-side",

            }
        ]
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rickandmortyapi.com',
          },
      ],
    }
};

export default nextConfig;


