/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageInsertViaUrl from "@ckeditor/ckeditor5-image/src/imageinsertviaurl.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  BlockQuote,
  Bold,
  CloudServices,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  GeneralHtmlSupport,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageInsertViaUrl,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  // XXX: keep disabled until we support uploads, and when doing so make sure that we
  // do not get the upload behavior except in cases where we want it (other places should
  // still be insert-via-url only)
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  Markdown,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SimpleUploadAdapter,
  SourceEditing,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TextTransformation,
  Underline,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "superscript",
      "|",
      "link",
      "fontColor",
      "removeFormat",
      "|",
      "bulletedList",
      "numberedList",
      "-",
      "outdent",
      "indent",
      "|",
      "imageInsert",
      "insertTable",
      "|",
      "blockQuote",
      "code",
      "horizontalLine",
      "|",
      "findAndReplace",
      "undo",
      "redo",
      "|",
      "sourceEditing",
    ],
    shouldNotGroupWhenFull: true,
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
  },
};

export default Editor;
