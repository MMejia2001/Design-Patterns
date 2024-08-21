
import { AdminUIFactory } from './AdminUIFactory';
import { InstructorUIFactory } from './InstructorUIFactory';
import { StudentUIFactory } from './StudentUIFactory';
import { UIManager } from './UIManager';

const uifactory = new AdminUIFactory();
const uifactory2 = new StudentUIFactory();
const uifactory3 = new InstructorUIFactory();

const uiManager = new UIManager(uifactory);
const uiManager2 = new UIManager(uifactory2);
const uiManager3 = new UIManager(uifactory3);

const adminUI = uiManager.createUI();
adminUI.button.render();
adminUI.dialog.show();

const studentUI = uiManager2.createUI();
studentUI.button.render();
studentUI.dialog.show();

const instructorUI = uiManager3.createUI();
instructorUI.button.render();
instructorUI.dialog.show();