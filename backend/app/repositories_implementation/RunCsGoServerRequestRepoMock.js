import { 
  RunCsGoServerRequest, 
  CsGoMap,
  GameLobby,
  User,
} from '../domain/entities/index.js'


export default class RunCsGoServerRequestRepoMock { 

  add({request}) {
    console.log('SAVING REQUEST');
    console.log(request);
  }

  find({id}) {
    if (id === 1) {
        return new RunCsGoServerRequest({
          id: 1, 
          gameLobby: new GameLobby({
            id: 1,
            name: 'lobby1',
            users: [
              new User({
                id: 1,
                name: 'player1',
              }),
              new User({
                id: 2,
                name: 'player2',
              }),
            ],
          }), 
          maps: [
            new CsGoMap({name: 'de_dust2'}), 
            new CsGoMap({name: 'de_train'}),
          ],
        })
    }
    return null
  }
}
