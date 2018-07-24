import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatChipsModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

const Modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule
];

@NgModule({
  imports: Modules,
  exports: Modules
})
export class MaterialModule {
}
