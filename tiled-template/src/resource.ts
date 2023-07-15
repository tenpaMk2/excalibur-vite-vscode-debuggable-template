import { TiledMapResource } from "@excaliburjs/plugin-tiled";

const tiledMapTmx = `/tmx/sample-stage.tmx`;

export const Resources = {
  tiledmap: new TiledMapResource(tiledMapTmx),
};
