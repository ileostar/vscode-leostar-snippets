import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'

export function activate(context: ExtensionContext) {
  window.showInformationMessage('Hello')
  const demo = commands.registerCommand('leostar-tools.leostar', () => {
    window.showInformationMessage('Hello')
  })
  const demo2 = commands.registerCommand('leostar-tools.leostar2', () => {
    window.showInformationMessage('demo2')
  })


  context.subscriptions.push(demo)
  context.subscriptions.push(demo2)
}

export function deactivate() {

}
