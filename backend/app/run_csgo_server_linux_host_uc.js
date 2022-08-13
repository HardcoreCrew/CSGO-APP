import { Client } from 'ssh2'
import { 
    RunCsGoServerLinuxHostInputDto,
 } from "./cs_go_servers_management/dtos/index.js"
import {
    RunCsGoServerLinuxHost,
 } from "./cs_go_servers_management/use_cases/index.js"
import { 
    CsGoServerApiKeyRepoMock, 
    CsGoServerHostRepoMock, 
    RunCsGoServerRequestRepoMock,
 } from "./repositories_implementation/index.js"
import {
    DotEnvSettings,
} from './settings_implementation/index.js'


const settings = new DotEnvSettings()
const csGoServerRequestRepo = new RunCsGoServerRequestRepoMock()
const csGoServerHostRepo = new CsGoServerHostRepoMock({
    settings,
    arePortsAvailable: true,
})
const csGoServerApiKeyRepo = new CsGoServerApiKeyRepoMock({
    settings,
    areApiKeysAvailable: true,
})
const sshConnector = new Client()
const runServer = new RunCsGoServerLinuxHost({
    csGoServerRequestRepo,
    csGoServerHostRepo,
    csGoServerApiKeyRepo,
    sshConnector,
    settings,
})

const inputDto = new RunCsGoServerLinuxHostInputDto({requestId: 1})
runServer.execute({inputDto})
