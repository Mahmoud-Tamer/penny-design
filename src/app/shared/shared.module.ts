import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class SharedModule {}
