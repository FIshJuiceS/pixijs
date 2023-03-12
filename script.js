import { Application, Sprite, Assets } from 'pixi.js';

const app = new Application();


document.body.appendChild(app.view);


const texture = await Assets.load('FINALBOSS.png')


const entity = new Sprite(texture);


entity.x = app.renderer.width / 2;
entity.y = app.renderer.height / 2;


entity.anchor.x = 0.5;
entity.anchor.y = 0.5;


app.stage.addChild(entity);


app.ticker.add(() => {
    entity.rotation += 0.01;
});
