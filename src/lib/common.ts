export class CocoCommand {
  public name: string;
  public description: string;
  public value: string;

  constructor(name: string, description: string, value: string) {
    this.name = name;
    this.description = description;
    this.value = value;
  }
}

export const COMMANDS = {
  "coco-add-pipeline": new CocoCommand("coco-add-pipeline", "Add a new pipeline", "coco-add-pipeline"),
  "coco-add-cell": new CocoCommand("coco-add-cell", "Add a new cell", "coco-add-cell"),
};
