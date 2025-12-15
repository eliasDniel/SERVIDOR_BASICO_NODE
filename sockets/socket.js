

const Bands = require("../models/bands");
const Band = require("../models/band");
const bands = new Bands()

bands.addBand(new Band("Metallica"));
bands.addBand(new Band("Queen"));
bands.addBand(new Band("Héroes del Silencio"));
bands.addBand(new Band("Bon Jovi"));

module.exports = (io) => {
  io.on("connection", (client) => {
    console.log("Cliente conectado");

    client.emit("active-bands", bands.getBands());

    client.on("disconnect", () => {
      console.log("Cliente desconectado");
    });

    client.on("message", (payload) => {
      console.log("Mensaje recibido:", payload);

      io.emit("message", {
        admin: "Nuevo mensaje",
      });
    });


    client.on("emit-message", (payload) => {
      client.broadcast.emit("new-message", payload);
    });

    client.on("vote-band", (payload) => {
      bands.voteBand(payload.id);
      io.emit("active-bands", bands.getBands());
    });

    client.on("add-band", (payload) => {
      bands.addBand(new Band(payload.name));
      io.emit("active-bands", bands.getBands());
    });
    client.on("delete-band", (payload) => {
      bands.deleteBand(payload.id);
      io.emit("active-bands", bands.getBands());
    });
  });
};
