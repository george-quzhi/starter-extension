// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var stater = require("starter-cli");
var path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "stater-extension" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable_route = vscode.commands.registerCommand('extension.route', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate('route', param.path, names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });
  let disposable_controller = vscode.commands.registerCommand('extension.controller', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate('controller', param.path, names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });
  let disposable_dto = vscode.commands.registerCommand('extension.dto', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate('dto', param.path, names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });
  let disposable_model = vscode.commands.registerCommand('extension.model', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate('model', param.path, names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });
  let disposable_service = vscode.commands.registerCommand('extension.service', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate('service', param.path, names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });
  let disposable_interface = vscode.commands.registerCommand('extension.interface', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate('interface', param.path, names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });
  let disposable_test = vscode.commands.registerCommand('extension.test', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate('test', param.path, names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });
  let disposable_module = vscode.commands.registerCommand('extension.module', (param) => {
    try {
      vscode.window.showInputBox(
        {
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称的单数形式和复数形式，以逗号分隔，以驼峰形式，如：user,users',
          prompt: '文件名会自动以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            const names = name.split(',')
            stater.generate("route", path.join(param.path, "routes"), names[0], names[1]);
            stater.generate("controller", path.join(param.path, "controllers"), names[0], names[1]);
            stater.generate("dto", path.join(param.path, "dtos"), names[0], names[1]);
            stater.generate("model", path.join(param.path, "models"), names[0], names[1]);
            stater.generate("interface", path.join(param.path, "interfaces"), names[0], names[1]);
            stater.generate("service", path.join(param.path, "services"), names[0], names[1]);
            stater.generate("test", path.join(param.path, "tests"), names[0], names[1]);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  context.subscriptions.push(disposable_route);
  context.subscriptions.push(disposable_controller);
  context.subscriptions.push(disposable_dto);
  context.subscriptions.push(disposable_model);
  context.subscriptions.push(disposable_service);
  context.subscriptions.push(disposable_interface);
  context.subscriptions.push(disposable_test);
  context.subscriptions.push(disposable_module);
}

// this method is called when your extension is deactivated
export function deactivate() { }
