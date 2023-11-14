import { FileLoader, FileRepository, UploadAdapter, UploadResponse } from "@ckeditor/ckeditor5-upload";
import { Subject, throwError } from "rxjs";
import { takeUntil, switchMap } from "rxjs/operators";
import { Plugin } from '@ckeditor/ckeditor5-core';
import { logWarning } from '@ckeditor/ckeditor5-utils';

import { fromFetch } from 'rxjs/fetch';

export interface TpUploadAdapterOptions {
    serverUrl: string;
    authorization: string;
    authorizationType: 'Bearer' | 'Basic' | '';
    fileNamePrefix: string;
}

class Adapter implements UploadAdapter {
    private aborted$: Subject<void>;
    constructor(public loader: FileLoader, public options: TpUploadAdapterOptions) {
        this.aborted$ = new Subject<void>();
    }

    async upload(): Promise<UploadResponse> {
        return await this.loader.file.then(async f => {
            if (!f) {
                return;
            }
            const { fileNamePrefix, authorizationType, authorization, serverUrl } = this.options;

            const formData = new FormData();
            formData.append(fileNamePrefix, f);

            const val = fromFetch(serverUrl, {
                headers: {
                    Authorization: `${authorizationType} ${authorization}`,
                    Accept: 'application/json'
                },
                method: 'POST',
                body: formData
            }).pipe(takeUntil(this.aborted$), switchMap(sm => {
                if (!sm.ok) {
                    return throwError(sm.body);
                }
                return sm.json();
            })).toPromise();
            return val;
        })
    }

    abort() {
        this.aborted$.next();
        this.aborted$.complete();
    }
}

export default class TpUploadAdapter extends Plugin {
    public static get requires() {
        return [FileRepository] as const;
    }

    /**
     * @inheritDoc
     */
    public static get pluginName() {
        return TpUploadAdapter.name;
    }

    init() {
        const options = this.editor.config.get('tpUpload') as TpUploadAdapterOptions;

        if (!options) {
            return;
        }

        if (!options.serverUrl) {
            logWarning('tpUpload-adapter-missing-serverUrl');
            return;
        }

        this.editor.plugins.get(FileRepository).createUploadAdapter = loader => {
            return new Adapter(loader, options);
        };
    }
}