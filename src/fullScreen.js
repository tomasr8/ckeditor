import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import Icon from "./maximize.svg";

import "./fullScreen.css";

export default class FullScreen extends Plugin {
  init() {
    const editor = this.editor;
    const t = editor.t;
    this.isFullScreen = false;
    this.styles = {};
    console.log(editor, editor.ui.view);

    const maximize = () => {
      const rootElement = editor.ui.view.element;
      this.saveStyles(rootElement);
      rootElement.style.position = "fixed";
      rootElement.style.top = 0;
      rootElement.style.left = 0;
      rootElement.style.width = "100%";
      rootElement.classList.add("full-screen");
      this.updateState();
    };

    const minimize = () => {
      const rootElement = editor.ui.view.element;
      this.restoreStyles(rootElement);
      rootElement.classList.remove("full-screen");
      this.updateState();
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape" && this.fullScreen) {
        minimize();
      }
    };

    editor.ui.componentFactory.add("fullscreen", () => {
      this.button = new ButtonView();
      this.button.set({
        label: t("Full screen"),
        icon: Icon,
        tooltip: true,
      });

      this.button.on("execute", () => {
        if (!this.fullScreen) {
          document.addEventListener("keydown", onKeyDown);
          maximize();
        } else {
          document.removeEventListener("keydown", onKeyDown);
          minimize();
        }
      });

      return this.button;
    });
  }

  updateState() {
    this.fullScreen = !this.fullScreen;
    this.button.set({ isOn: this.fullScreen });
    editor.editing.view.focus();
  }

  saveStyles(element) {
    this.styles = {
      position: element.style.position,
      top: element.style.top,
      left: element.style.left,
      width: element.style.width,
    };
  }

  restoreStyles(element) {
    element.style.position = this.styles.position;
    element.style.top = this.styles.top;
    element.style.left = this.styles.left;
    element.style.width = this.styles.width;
  }
}
