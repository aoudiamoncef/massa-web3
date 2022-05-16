import { EOperationStatus } from "../interfaces/EOperationStatus";
import { IAccount } from "../interfaces/IAccount";
import { IBalance } from "../interfaces/IBalance";
import { ICallData } from "../interfaces/ICallData";
import { IClientConfig } from "../interfaces/IClientConfig";
import { IContractData } from "../interfaces/IContractData";
import { IContractReadOperationData } from "../interfaces/IContractReadOperationData";
import { IContractStorageData } from "../interfaces/IContractStorageData";
import { IEvent } from "../interfaces/IEvent";
import { IEventFilter } from "../interfaces/IEventFilter";
import { IExecuteReadOnlyResponse } from "../interfaces/IExecuteReadOnlyResponse";
import { IReadData } from "../interfaces/IReadData";
import { ISmartContractsClient } from "../interfaces/ISmartContractsClient";
import { BaseClient } from "./BaseClient";
import { PublicApiClient } from "./PublicApiClient";
import { WalletClient } from "./WalletClient";
/** Smart Contracts Client which enables compilation, deployment and streaming of events */
export declare class SmartContractsClient extends BaseClient implements ISmartContractsClient {
    private readonly publicApiClient;
    private readonly walletClient;
    private smartContractsEventEmitter;
    constructor(clientConfig: IClientConfig, publicApiClient: PublicApiClient, walletClient: WalletClient);
    /** this function is mainly used by the extension for singing */
    extensionSignScDeployment(contractData: IContractData, sender: IAccount): Promise<void>;
    onSmartContractDeploySignedListener(): Promise<void>;
    /** create and send an operation containing byte code */
    deploySmartContract(contractData: IContractData, executor?: IAccount): Promise<Array<string>>;
    /** call smart contract method */
    callSmartContract(callData: ICallData, executor?: IAccount): Promise<Array<string>>;
    /** read smart contract method */
    readSmartContract(readData: IReadData): Promise<Array<IContractReadOperationData>>;
    /** Returns the parallel balance which is the smart contract side balance  */
    getParallelBalance(address: string): Promise<IBalance | null>;
    /** get filtered smart contract events */
    getFilteredScOutputEvents(eventFilterData: IEventFilter): Promise<Array<IEvent>>;
    /** Returns the smart contract data storage for a given key */
    getDatastoreEntry(smartContractAddress: string, key: string): Promise<IContractStorageData | null>;
    /** Read-only smart contracts */
    executeReadOnlySmartContract(contractData: IContractData): Promise<Array<IExecuteReadOnlyResponse>>;
    getOperationStatus(opId: string): Promise<EOperationStatus>;
    awaitRequiredOperationStatus(opId: string, requiredStatus: EOperationStatus): Promise<EOperationStatus>;
}
