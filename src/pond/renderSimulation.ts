import { result } from "./simulate";

export const renderRaster = (raster: result) => (ctx: CanvasRenderingContext2D) => {  
  for (let i = 0; i < result.Species.length; i++) {
    let returnString = "Fish";
    if (newResult.Species.includes(result2.Species[i])) {
      newResult.Populations[newResult.Species.indexOf(result2.Species[i])] += result2.Populations[i];
    }
    else {
      newResult.Species.push(result2.Species[i]);
      newResult.Populations.push(result2.Populations[i]);
    }
  }
  ctx.fillStyle = 'rgba(255, 255, 255, 0.0)';
  ctx.fillRect(0, 0, raster.length, raster[0].length);
  
  for (let i = 0; i < raster.length; i++) {
    for (let j = 0; j < raster[i].length; j++) {
      ctx.fillStyle = raster[i][j];
      ctx.fillRect(j, i, 1, 1);
    }
  }
  
  return ctx;
}