import { 
  RunCsGoServerRequest, 
  CsGoMap,
  GameLobby,
  User,
} from '../domain/entities'
import {
  IRunCsGoServerRequestRepo,
 } from '../repositories';


export default class RunCsGoServerRequestRepoMock implements IRunCsGoServerRequestRepo { 

  add({request}: {request: RunCsGoServerRequest}): void {
    console.log('SAVING REQUEST');
    console.log(request);
  }

  find({id}: {id: number}): RunCsGoServerRequest | null {
    if (id !== 1) {
      return null
    }
    return new RunCsGoServerRequest(
      1, 
      new GameLobby(
        1,
        'lobby1',
        [
          new User(1, 'player1'),
          new User(2, 'player2'),
        ],
      ), 
      [
        new CsGoMap('de_dust2'), 
        new CsGoMap('de_train'),
      ],
      new Date(),
    )
  }
}
