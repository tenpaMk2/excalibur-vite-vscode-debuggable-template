import { Actor, CollisionType, Color, Engine, Scene, Vector } from "excalibur";
import { Resources } from "../resource";

export class GameScene extends Scene {
  onInitialize(engine: Engine): void {
    Resources.tiledmap.addTiledMapToScene(this);

    const actor = new Actor({
      x: 20,
      width: 18,
      height: 18,
      color: Color.Magenta,
      collisionType: CollisionType.Active,
    });
    actor.onInitialize = (_engine: Engine): void => {
      actor.acc = Vector.Down.scale(10);
    };
    engine.add(actor);

    const objects = Resources.tiledmap.data.getExcaliburObjects();
    const rawSpring = objects[0]?.getObjectByName("spring");
    if (!rawSpring) throw Error(`cannot find "spring".`);
    const spring = new Actor({
      x: rawSpring.x,
      y: rawSpring.y,
      width: rawSpring.width,
      height: rawSpring.height,
      anchor: new Vector(0, 0),
      color: Color.Green,
    });
    engine.add(spring);
  }
}
