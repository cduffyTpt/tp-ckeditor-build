import { FileRepository } from "@ckeditor/ckeditor5-upload";
import { Plugin } from '@ckeditor/ckeditor5-core';
export interface TpUploadAdapterOptions {
    serverUrl: string;
    authorization: string;
    authorizationType: 'Bearer' | 'Basic' | '';
    fileNamePrefix: string;
}
export default class TpUploadAdapter extends Plugin {
    static get requires(): readonly [typeof FileRepository];
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    init(): void;
}
