import { ref } from '../exports';
import { Observable } from 'rxjs/Observable';

export const createTask = async (task) => {
  try {
    await ref.child('tasks')
      .push({
        created: new Date().getTime(),
        ...task
      });
  } catch (e) {
    throw e;
  }
}

export const streamTasks = () => {
  return Observable.create(obs => {
    ref.child('tasks')
      .on('value', snap => {
        let arr = [];
        snap.forEach(child => {
          arr.push({
            key: child.key,
            ...child.val()
          });
        });
        arr = new Array(arr)[0].sort((a, b) => {
          return b.created - a.created;
        });
        obs.next(arr);
      }, e => obs.error(e));
  });
}