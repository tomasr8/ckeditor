import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import Maximize from "./maximize.svg";

import "./styles.css";

export default class FullScreen extends Plugin {
  static get pluginName() {
    return "FullScreen";
  }

  constructor(editor) {
    super(editor);
    this.set("isFullScreen", false);
  }

  init() {
    const editor = this.editor;
    const t = editor.t;
    const rootElement = editor.editing.view.document.getRoot();
    const height = rootElement.getStyle("height");
    const overflow = rootElement.getStyle("overflow");

    const maximize = () => {
      const wrapperElement = editor.ui.view.element;
      wrapperElement.classList.add("ck-plugin-full-screen");
      // https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/migration-from-ckeditor-4.html#configuration-options-compatibility-table
      // From the 'height' section of the table: the view writer should be used to set the the height dynamically
      editor.editing.view.change((writer) => {
        writer.setStyle(
          { height: "100%", "overflow-y": "scroll" },
          rootElement
        );
      });
    };

    const minimize = () => {
      const wrapperElement = editor.ui.view.element;
      wrapperElement.classList.remove("ck-plugin-full-screen");
      editor.editing.view.change((writer) => {
        this._restoreStyle(writer, "height", height, rootElement);
        this._restoreStyle(writer, "overflow-y", overflow, rootElement);
      });
    };

    editor.ui.componentFactory.add("fullscreen", () => {
      const button = new ButtonView();
      button.set({
        label: t("Full screen"),
        icon: Maximize,
        tooltip: true,
      });

      button.bind("isOn").to(this, "isFullScreen");

      const onKeyDown = (e) => {
        if (e.key === "Escape" && this.isFullScreen) {
          button.fire("execute");
        }
      };

      button.on("execute", () => {
        if (!this.isFullScreen) {
          document.addEventListener("keydown", onKeyDown);
          maximize();
        } else {
          document.removeEventListener("keydown", onKeyDown);
          minimize();
        }
        this.isFullScreen = !this.isFullScreen;
        editor.editing.view.focus();
      });

      return button;
    });
  }

  _restoreStyle(writer, name, value, element) {
    value !== undefined
      ? writer.setStyle(name, value, element)
      : writer.removeStyle(name, element);
  }
}
