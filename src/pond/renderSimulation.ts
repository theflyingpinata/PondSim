import { result } from "./simulate";

export const renderSimulation = (simulate: result) => (ctx: CanvasRenderingContext2D) => {
  
  ctx.font = '48px Arial';
  ctx.fillText(simulate.Populations[0], 100, 500);
  ctx.fillText("Pond", 100, 50);
  //let returnString = "Pond\n";

  ctx.font = '12px serif';
  for (let i = 0; i < simulate.Species.length; i++) {
    // Fish first
    let returnString = `${simulate.Species[i].Name} - Population: ${simulate.Populations[i]}\n`;
    ctx.fillText(returnString, 100 , 50 + ((i + 1) * 15));
  }

  //ctx.font = '48px serif';
 // ctx.fillText(returnString, 100, 50);
  
  
  return ctx;
}