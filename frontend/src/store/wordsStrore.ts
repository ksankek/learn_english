import { makeAutoObservable } from "mobx";

export default class WordsStore {
  private _words: object[];

  constructor() {
    this._words = [];
    makeAutoObservable(this);
  }

  setWords(words: object[]) {
    this._words = words;
  }

  get words() {
    return this._words;
  }
}
