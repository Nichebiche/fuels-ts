import type { ParamType } from '@ethersproject/abi';

export interface JsonFragmentType {
  readonly name?: string;
  readonly type?: string;
  readonly components?: ReadonlyArray<JsonFragmentType>;
}

export interface JsonFragment {
  readonly name: string;
  readonly type: string;
  readonly inputs?: ReadonlyArray<JsonFragmentType>;
  readonly outputs?: ReadonlyArray<JsonFragmentType>;
}

interface FragmentParams {
  readonly type: string;
  readonly name: string;
  readonly strictInputs: boolean;
  readonly inputs: Array<ParamType>;
  readonly outputs: Array<ParamType>;
}

export abstract class Fragment {
  readonly type: string;
  readonly name: string;
  readonly strictInputs: boolean;
  readonly inputs: Array<ParamType> = [];
  readonly outputs: Array<ParamType> = [];

  constructor(params: FragmentParams) {
    this.type = params.type;
    this.name = params.name;
    this.inputs = params.inputs;
    this.outputs = params.outputs;
    this.strictInputs = params.strictInputs;
  }

  abstract format(format?: string): string;
}
