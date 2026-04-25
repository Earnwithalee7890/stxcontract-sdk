import { StacksMainnet, StacksTestnet, StacksMocknet, StacksNetwork } from '@stacks/network';

export interface StxContractConfig {
  network: 'mainnet' | 'testnet' | 'devnet';
}

export class StxContractClient {
  private network: StacksNetwork;

  constructor(config: StxContractConfig) {
    switch (config.network) {
      case 'mainnet':
        this.network = new StacksMainnet();
        break;
      case 'testnet':
        this.network = new StacksTestnet();
        break;
      case 'devnet':
        this.network = new StacksMocknet();
        break;
      default:
        this.network = new StacksMainnet();
    }
  }

  getNetwork(): StacksNetwork {
    return this.network;
  }

  // Future implementation for simplified clarity calls
}
