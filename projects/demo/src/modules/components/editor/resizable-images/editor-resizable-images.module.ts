import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {ExampleTuiEditorResizableImagesComponent} from './editor-resizable-images.component';
import {TuiEditorResizableEditorExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiAddonDocModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(
            tuiGenerateRoutes(ExampleTuiEditorResizableImagesComponent),
        ),
    ],
    declarations: [
        TuiEditorResizableEditorExample1,
        ExampleTuiEditorResizableImagesComponent,
    ],
})
export class ExampleTuiEditorResizableImagesToolModule {}