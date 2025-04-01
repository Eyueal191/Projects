import { createServer, Model, Response } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      van: Model, // Singular model name for MirageJS compatibility
    },

    logging: true, // Enable logging for debugging

    seeds(server) {
      const vansData = [
        {
          id: "1",
          name: "Modest Explorer",
          price: 60,
          description: "A simple van for nature lovers.",
          type: "simple",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/2j2WHTgb/Simple1.jpg",
        },
        {
          id: "2",
          name: "Beach Bum",
          price: 80,
          description: "Surfer-inspired portable home.",
          type: "simple",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/7YR24hHq/Simple2.jpg",
        },
        {
          id: "3",
          name: "Reliable Red",
          price: 100,
          description: "Van with a cozy kitchen.",
          type: "simple",
          hostId: "456",
          imageUrl: "https://i.postimg.cc/0yJJyvjD/simple3.jpg",
        },
        {
          id: "4",
          name: "Dreamfinder",
          price: 65,
          description: "Spacious and comfortable travel van.",
          type: "simple",
          hostId: "789",
          imageUrl: "https://i.postimg.cc/2ycBV8nF/simple4.jpg",
        },

        {
          id: "5",
          name: "The Royal Cruiser",
          price: 200,
          description: "Luxury van with full kitchen and plush interior.",
          type: "luxury",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/wBqHb5CM/luxury1.jpg",
        },
        {
          id: "6",
          name: "The Elite Explorer",
          price: 250,
          description: "Elegant luxury van for adventurers.",
          type: "luxury",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/DwdngpYR/luxury2.jpg",
        },
        {
          id: "7",
          name: "Luxuriana",
          price: 300,
          description: "Ultimate luxury and comfort for the road.",
          type: "luxury",
          hostId: "456",
          imageUrl: "https://i.postimg.cc/tRwqCxxv/luxury3.jpg",
        },
        {
          id: "8",
          name: "The Grand Voyager",
          price: 350,
          description: "Top-tier van with gourmet kitchen.",
          type: "luxury",
          hostId: "789",
          imageUrl: "https://i.postimg.cc/DyG2WwQv/luxury4.jpg",
        },

        {
          id: "9",
          name: "Rugged Outlaw",
          price: 120,
          description: "Off-road ready van for the adventurous spirit.",
          type: "rugged",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/5yhbPhJW/rugged1.jpg",
        },
        {
          id: "10",
          name: "Wild Rover",
          price: 140,
          description: "Built for extreme terrains with extra storage.",
          type: "rugged",
          hostId: "123",
          imageUrl: "https://i.postimg.cc/13ZyD1Mp/rugged2.jpg",
        },
        {
          id: "11",
          name: "The Nomad",
          price: 160,
          description:
            "Designed for tough conditions, with solar-powered electricity.",
          type: "rugged",
          hostId: "456",
          imageUrl: "https://i.postimg.cc/2ybC7zPx/rugged3.jpg",
        },
        {
          id: "12",
          name: "Trailblazer",
          price: 180,
          description: "Tackles any terrain with mud tires and winch.",
          type: "rugged",
          hostId: "789",
          imageUrl: "https://i.postimg.cc/qRZkKtZR/rugged4.jpg",
        },
      ];

      vansData.forEach((van) => server.create("van", van));
    },

    routes() {
      this.namespace = "api"; // Prefix all API routes with `/api`
      this.timing = 500; // Simulated response delay

      // Get all vans or filter by type using query params
      this.get("/vans", (schema, request) => {
        let { type, hostId } = request.queryParams;
        let vans = schema.vans.all();

        if (type) {
          vans = vans.filter((van) => van.type === type);
        }

        if (hostId) {
          vans = vans.filter((van) => van.hostId === hostId);
        }

        return vans;
      });

      // Get a specific van by ID
      this.get("/vans/:id", (schema, request) => {
        const id = request.params.id;
        const van = schema.vans.find(id);

        return van || new Response(404, {}, { error: "Van not found" });
      });

      // Get all vans of a specific type (example usage: /vans?type=luxury)
      this.get("/vans/type/:type", (schema, request) => {
        const type = request.params.type;
        const vans = schema.vans.where({ type });

        return vans.length
          ? vans
          : new Response(404, {}, { error: `${type} vans not found` });
      });

      // Get all vans by a specific host (example usage: /vans?hostId=123)
      this.get("/host/vans", (schema, request) => {
        const hostId = request.queryParams.hostId;
        const vans = schema.vans.where({ hostId });

        return vans.length
          ? vans
          : new Response(
              404,
              {},
              { error: `Vans for host ${hostId} not found` }
            );
      });

      // Catch-all for undefined routes to prevent MirageJS errors
      this.passthrough();
    },
  });

  return server;
}
