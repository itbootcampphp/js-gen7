export class ChatUI{
    //konstruktor
    constructor(l){
        this.list = l;
    }

    //geter i seter
    set list(l){
        this._list = l;
    }

    get list(){
        return this._list;
    }
} 