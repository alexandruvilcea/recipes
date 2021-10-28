import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private db: AngularFirestore
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.db.collection<Recipe>('recipes').valueChanges();
  }
}
