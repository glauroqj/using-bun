// import { PokemonResponse } from "./types/PokemonResponse";
// import { PokemonsResponse } from "./types/PokemonsResponse";
// import { renderToReadableStream } from "react-dom/server";
// import Pokemon from "./components/Pokemon";
// import PokemonList from "./components/PokemonList";

Bun.serve({
  development: true,
  port: 5000, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  // hostname: "mydomain.com", // defaults to "0.0.0.0"
  fetch(req) {
    return new Response("Welcome to Bun!");

    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

// const router = new Bun.FileSystemRouter({
//   style: "nextjs",
//   dir: "./pages",
//   origin: "https://mydomain.com",
//   assetPrefix: "_next/static/",
// });
// router.match("/");

// Bun.serve({
//   async fetch(request) {
//     const url = new URL(request.url);

//     if (url.pathname === "/pokemon") {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon");

//       const { results } = (await response.json()) as PokemonsResponse;

//       const stream = await renderToReadableStream(<PokemonList pokemon={results} />);

//       return new Response(stream, {
//         headers: { "Content-Type": "text/html" },
//       });
//     }

//     const pokemonNameRegex = /^\/pokemon\/([a-zA-Z0-9_-]+)$/;
//     const match = url.pathname.match(pokemonNameRegex);

//     if (match) {
//       const pokemonName = match[1];

//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//       if (response.status === 404) {
//         return new Response("Not Found", { status: 404 });
//       }

//       const {
//         height,
//         name,
//         weight,
//         sprites: { front_default },
//       } = (await response.json()) as PokemonResponse;

//       const stream = await renderToReadableStream(<Pokemon name={name} height={height} weight={weight} img={front_default} />);

//       return new Response(stream, {
//         headers: { "Content-Type": "text/html" },
//       });
//     }

//     return new Response("Not Found", { status: 404 });
//   },
// });

// console.log("Listening ...");
