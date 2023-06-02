import { spawn } from "node:child_process";
// cette fonction prend en premier paramètre la commande à executer, puis les arguments qui accompane la commande et cela dans un tableau et enfin les options
const child = spawn("ls", [], { shell: true });
child.stdout.on("data", (data) => {
  console.log(data.toString());
});
// Pour voir si le stream a generer une erreur et les intercepter ou l'imprimer sur la console
child.stderr.on("data", (data) => {
  console.log(data);
});
// Si la commande passer à spawn ne s'execute pas, l'evenement "error" va etre declencher,Pour voir si les stream renvois un evenement d'erreur
child.on("error", (err) => {
  console.log(err);
});
//  Si la commande passer à spawn à été interrompus pendant l'execution
child.on("close", () => {});
