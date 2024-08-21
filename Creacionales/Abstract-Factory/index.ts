
import { AdminUIFactory } from './AdminUIFactory';
import { UIManager } from './UIManager';

const uifactory = new AdminUIFactory();
const uiManager = new UIManager(uifactory);

const adminUI = uiManager.createUI();
adminUI.button.render();
adminUI.dialog.show();