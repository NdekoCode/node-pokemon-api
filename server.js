import { createServer } from "node:http";

const PORT = 3000;

const server = createServer();

// req: La requete entrante: IncomingMessage qui est un Readable stream: un flux en lecture donc elle peut donc s'abonner à des evenements ou emettre des evenements.
// res: La reponse du serveur: ServerResponse, on peut l'utiliser pour retourner quelques informations comme par exemple le status renvoyer par le serveur, ou les données envoyer par les serveurs que nous aimerions inclure dans le corps de la reponse. (C'est un stream d'ecriture qui fait OutgoindMessage < Stream.Writable)
// (req,res)=>{}
server
  .on("request", (req, res) => {
    console.log("Hello world");
    res.end("Hello world");
    console.dir(req.headers, { depth: 0 });
  })
  .listen(PORT, () => {
    console.log(`Server is listening at http:localhost:${PORT}`);
  });
