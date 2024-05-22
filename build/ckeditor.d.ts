/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Code, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageInsert, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import TpUploadAdapter from './adapters/tp-upload-adapter';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof TpUploadAdapter | typeof Autoformat | typeof BlockQuote | typeof Bold | typeof Essentials | typeof Image | typeof Code | typeof ImageToolbar | typeof ImageInsert | typeof ImageUpload | typeof Indent | typeof Italic | typeof Link | typeof List | typeof Markdown | typeof Paragraph | typeof Heading | typeof PasteFromOffice | typeof Table | typeof TableToolbar | typeof CodeBlock | typeof TextTransformation)[];
    static defaultConfig: any;
}
export default Editor;
