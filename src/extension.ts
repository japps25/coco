import { commands, ExtensionContext } from "vscode";
import { CocoPanel } from "./panels/CocoPanel";

export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const newCocoPanelCommand = commands.registerCommand("coco-editor.newCocoPanel", () => {
    CocoPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(newCocoPanelCommand);
}
