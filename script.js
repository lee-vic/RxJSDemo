import * as rxjs from 'rxjs'
import { filter } from 'rxjs/operators';

rxjs.of(1,2,3).pipe(filter(x=>x>2)).subscribe(x=>console.log(x));
rxjs.Observable.create(function(observer){
    observer.next()
});